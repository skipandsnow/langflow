import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";
import { api } from "../../api";
import { getURL } from "../../helpers/constants";
import { UseRequestProcessor } from "../../services/request-processor";

interface IDataUploadResponse {
  message: string;
}

interface IDataUploadOptions {
  onSuccess?: (data: IDataUploadResponse) => void;
  onError?: (error: any) => void;
}

export const useUploadData = (
  options?: IDataUploadOptions
): UseMutationResult<IDataUploadResponse, any, FormData> => {
  const { mutate } = UseRequestProcessor();

  const uploadDataFunction = async (formData: FormData): Promise<IDataUploadResponse> => {
    const res = await api.post(`${getURL("FILES")}/data/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  };

  const mutation: UseMutationResult<IDataUploadResponse, any, FormData> = mutate(
    ["useUploadData"],
    async (formData: FormData) => {
      const res = await uploadDataFunction(formData);
      return res;
    },
    options
  );

  return mutation;
};