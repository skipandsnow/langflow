import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";
import { api } from "../../api";
import { getURL } from "../../helpers/constants";
import { UseRequestProcessor } from "../../services/request-processor";

interface IFileUploadResponse {
  message: string;
}

interface IFileUploadOptions {
  onSuccess?: (data: IFileUploadResponse) => void;
  onError?: (error: any) => void;
}

export const useUploadFile = (
  options?: IFileUploadOptions
): UseMutationResult<IFileUploadResponse, any, FormData> => {
  const { mutate } = UseRequestProcessor();

  const uploadFileFunction = async (formData: FormData): Promise<IFileUploadResponse> => {
    const res = await api.post(`${getURL("FILES")}/data/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  };

  const mutation: UseMutationResult<IFileUploadResponse, any, FormData> = mutate(
    ["useUploadFile"],
    async (formData: FormData) => {
      const res = await uploadFileFunction(formData);
      return res;
    },
    options
  );

  return mutation;
};