import axios from "axios";
import { UploadParam } from "../../types/Upload/upload.type";



const SERVER = process.env.REACT_APP_SERVER_URL!;

class UploadRepositoryImpl {
  public async uploadFile(FileData:UploadParam):Promise<void>{
    await axios.post(`${SERVER}/upload`,FileData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }
}

export default new UploadRepositoryImpl();
