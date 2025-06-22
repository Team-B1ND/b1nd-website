import { UploadParam, UploadResponse } from "../../types/Upload/upload.type";
import { b1ndAxios } from "../../libs/Axios/customAxios";

class UploadRepositoryImpl {
  public async uploadFile(fileData: UploadParam): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append("file", fileData.file);

    const response = await b1ndAxios.post<UploadResponse>("/files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    
    return response.data;
  }
}

export default new UploadRepositoryImpl();
