import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
// import "ace-builds/webpack-resolver";
import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/dark.css";
import "react18-json-view/src/style.css";
import IconComponent from "../../components/genericIconComponent";
import { useDarkStore } from "../../stores/darkStore";
import BaseModal from "../baseModal";
import { useTranslation } from "react-i18next";

export default function DictAreaModal({
  children,
  onChange,
  value,
  disabled = false,
}: {
  children: JSX.Element;
  onChange?: (value: Object) => void;
  value: Object;
  disabled?: boolean;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const isDark = useDarkStore((state) => state.dark);
  const [myValue, setMyValue] = useState(value);
  const { t } = useTranslation();

  useEffect(() => {
    setMyValue(value);
  }, [value, open]);

  return (
    <BaseModal
      size="medium-h-full"
      open={open}
      disable={disabled}
      setOpen={setOpen}
      onSubmit={
        onChange
          ? () => {
              onChange(myValue);
              setOpen(false);
            }
          : undefined
      }
    >
      <BaseModal.Trigger className="h-full">{children}</BaseModal.Trigger>
      <BaseModal.Header
        description={onChange ? t("CODE_DICT_DIALOG_SUBTITLE") : null}
      >
        <span className="pr-2">
          {onChange ? "Edit Dictionary" : "View Dictionary"}
        </span>
        <IconComponent
          name="BookMarked"
          className="h-6 w-6 pl-1 text-primary"
          aria-hidden="true"
        />
      </BaseModal.Header>
      <BaseModal.Content>
        <div className="flex h-full w-full flex-col transition-all">
          <JsonView
            theme="vscode"
            dark={isDark}
            className={!isDark ? "json-view-white" : "json-view-dark"}
            editable={!!onChange}
            enableClipboard
            onChange={(edit) => {
              setMyValue(edit.src);
            }}
            src={cloneDeep(myValue)}
          />
        </div>
      </BaseModal.Content>
      <BaseModal.Footer submit={onChange ? { label: "Save" } : undefined} />
    </BaseModal>
  );
}
