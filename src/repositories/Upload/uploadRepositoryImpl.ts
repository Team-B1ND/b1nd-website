import { UploadParam, UploadResponse } from "../../types/Upload/upload.type";
import { b1ndAxios } from "../../libs/Axios/customAxios";

class UploadRepositoryImpl {
  public async uploadFile(fileData: UploadParam): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append("file", fileData.file, fileData.file.name);

    // Content-Type은 브라우저가 boundary를 포함해 자동 설정하도록 둡니다.
    const response = await b1ndAxios.post("/files/upload", formData);
    console.log(response);
    
    // 서버 응답: { status, message, data: { url, filename } }
    return response.data.data as UploadResponse;
  }
}

export default new UploadRepositoryImpl();
