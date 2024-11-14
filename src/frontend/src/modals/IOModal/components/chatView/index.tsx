import { INVALID_FILE_SIZE_ALERT } from "@/constants/alerts_constants";
import { useDeleteBuilds } from "@/controllers/API/queries/_builds";
import { usePostUploadFile } from "@/controllers/API/queries/files/use-post-upload-file";
import { track } from "@/customization/utils/analytics";
import { useMessagesStore } from "@/stores/messagesStore";
import { useUtilityStore } from "@/stores/utilityStore";
import { useEffect, useRef, useState } from "react";
import ShortUniqueId from "short-unique-id";
import IconComponent from "../../../../components/genericIconComponent";
import {
  ALLOWED_IMAGE_INPUT_EXTENSIONS,
  CHAT_FIRST_INITIAL_TEXT,
  CHAT_SECOND_INITIAL_TEXT,
  FS_ERROR_TEXT,
  SN_ERROR_TEXT,
} from "../../../../constants/constants";
import useAlertStore from "../../../../stores/alertStore";
import useFlowStore from "../../../../stores/flowStore";
import useFlowsManagerStore from "../../../../stores/flowsManagerStore";
import { ChatMessageType } from "../../../../types/chat";
import { FilePreviewType, chatViewProps } from "../../../../types/components";
import ChatInput from "./chatInput";
import useDragAndDrop from "./chatInput/hooks/use-drag-and-drop";
import ChatMessage from "./chatMessage";
import { useTranslation } from "react-i18next";

export default function ChatView({
  sendMessage,
  chatValue,
  setChatValue,
  lockChat,
  setLockChat,
  visibleSession,
  focusChat,
}: chatViewProps): JSX.Element {
  const { t } = useTranslation();

  const { flowPool, outputs, inputs, CleanFlowPool } = useFlowStore();
  const { setErrorData } = useAlertStore();
  const currentFlowId = useFlowsManagerStore((state) => state.currentFlowId);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([]);
  const messages = useMessagesStore((state) => state.messages);

  const inputTypes = inputs.map((obj) => obj.type);
  const updateFlowPool = useFlowStore((state) => state.updateFlowPool);
  const [id, setId] = useState<string>("");
  const { mutate: mutateDeleteFlowPool } = useDeleteBuilds();
  const maxFileSizeUpload = useUtilityStore((state) => state.maxFileSizeUpload);

  //build chat history
  useEffect(() => {
    const messagesFromMessagesStore: ChatMessageType[] = messages
      .filter(
        (message) =>
          message.flow_id === currentFlowId &&
          (visibleSession === message.session_id ?? true),
      )
      .map((message) => {
        let files = message.files;
        //HANDLE THE "[]" case
        if (typeof files === "string") {
          files = JSON.parse(files);
        }
        return {
          isSend: message.sender === "User",
          message: message.text,
          sender_name: message.sender_name,
          files: files,
          id: message.id,
          timestamp: message.timestamp,
          session: message.session_id,
          edit: message.edit,
        };
      });
    const finalChatHistory = [...messagesFromMessagesStore].sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });

    setChatHistory(finalChatHistory);
  }, [flowPool, messages, visibleSession]);
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, []);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
    // trigger focus on chat when new session is set
  }, [focusChat]);

  function clearChat(): void {
    setChatHistory([]);

    mutateDeleteFlowPool(
      { flowId: currentFlowId },
      {
        onSuccess: () => {
          CleanFlowPool();
        },
      },
    );
    //TODO tell backend to clear chat session
    if (lockChat) setLockChat(false);
  }

  function handleSelectChange(event: string): void {
    switch (event) {
      case "builds":
        clearChat();
        break;
      case "buildsNSession":
        console.log("delete build and session");
        break;
    }
  }

  function updateChat(
    chat: ChatMessageType,
    message: string,
    stream_url?: string,
  ) {
    chat.message = message;
    if (chat.componentId)
      updateFlowPool(chat.componentId, {
        message,
        sender_name: t(chat.sender_name ?? "Bot"),
        sender: t(chat.isSend ? "User" : "Machine"),
      });
  }
  const [files, setFiles] = useState<FilePreviewType[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const { dragOver, dragEnter, dragLeave } = useDragAndDrop(setIsDragging);

  const onDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files, setFiles, currentFlowId, setErrorData);
      e.dataTransfer.clearData();
    }
    setIsDragging(false);
  };

  const { mutate } = usePostUploadFile();

  const handleFiles = (files, setFiles, currentFlowId, setErrorData) => {
    if (files) {
      const file = files?.[0];
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (file.size > maxFileSizeUpload) {
        setErrorData({
          title: INVALID_FILE_SIZE_ALERT(maxFileSizeUpload / 1024 / 1024),
        });
        return;
      }

      if (
        !fileExtension ||
        !ALLOWED_IMAGE_INPUT_EXTENSIONS.includes(fileExtension)
      ) {
        console.log("Error uploading file");
        setErrorData({
          title: "Error uploading file",
          list: [FS_ERROR_TEXT, SN_ERROR_TEXT],
        });
        return;
      }
      const uid = new ShortUniqueId();
      const id = uid.randomUUID(3);
      setId(id);

      const type = files[0].type.split("/")[0];
      const blob = files[0];

      setFiles((prevFiles) => [
        ...prevFiles,
        { file: blob, loading: true, error: false, id, type },
      ]);

      mutate(
        { file: blob, id: currentFlowId },
        {
          onSuccess: (data) => {
            setFiles((prev) => {
              const newFiles = [...prev];
              const updatedIndex = newFiles.findIndex((file) => file.id === id);
              newFiles[updatedIndex].loading = false;
              newFiles[updatedIndex].path = data.file_path;
              return newFiles;
            });
          },
          onError: (error) => {
            setFiles((prev) => {
              const newFiles = [...prev];
              const updatedIndex = newFiles.findIndex((file) => file.id === id);
              newFiles[updatedIndex].loading = false;
              newFiles[updatedIndex].error = true;
              return newFiles;
            });
            setErrorData({
              title: "Error uploading file",
              list: [error.response?.data?.detail],
            });
          },
        },
      );
    }
  };

  return (
    <div
      className="eraser-column-arrangement"
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={onDrop}
    >
      <div className="eraser-size">
        <div ref={messagesRef} className="chat-message-div">
          {chatHistory?.length > 0 ? (
            chatHistory.map((chat, index) => (
              <ChatMessage
                setLockChat={setLockChat}
                lockChat={lockChat}
                chat={chat}
                lastMessage={chatHistory.length - 1 === index ? true : false}
                key={`${chat.id}-${index}`}
                updateChat={updateChat}
              />
            ))
          ) : (
            <div className="chat-alert-box">
              <span>
                👋 <span className="langflow-chat-span">{t("Langflow Chat")}</span>
              </span>
              <br />
              <div className="langflow-chat-desc">
                <span className="langflow-chat-desc-span">
                  {t(CHAT_FIRST_INITIAL_TEXT)}{" "}
                  <span>
                    <IconComponent
                      name="MessageSquareMore"
                      className="mx-1 inline h-5 w-5 animate-bounce"
                    />
                  </span>{" "}
                  {t(CHAT_SECOND_INITIAL_TEXT)}
                </span>
              </div>
            </div>
          )}
          <div ref={ref}></div>
        </div>
        <div className="langflow-chat-input-div">
          <div className="langflow-chat-input">
            <ChatInput
              chatValue={chatValue}
              noInput={!inputTypes.includes("ChatInput")}
              lockChat={lockChat}
              sendMessage={({ repeat, files }) => {
                sendMessage({ repeat, files });
                track("Playground Message Sent");
              }}
              setChatValue={(value) => {
                setChatValue(value);
              }}
              inputRef={ref}
              files={files}
              setFiles={setFiles}
              isDragging={isDragging}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
