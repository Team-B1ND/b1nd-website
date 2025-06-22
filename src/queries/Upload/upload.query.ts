import { useMutation } from "react-query"
import { UploadParam, UploadResponse } from "../../types/Upload/upload.type"
import uploadRepositoryImpl from "../../repositories/Upload/uploadRepositoryImpl"

export const useUploadMutation = () => {
    return useMutation<UploadResponse, unknown, UploadParam>((fileData) =>
      uploadRepositoryImpl.uploadFile(fileData)
    );
  };