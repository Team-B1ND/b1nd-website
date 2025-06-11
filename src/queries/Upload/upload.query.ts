import { useMutation } from "react-query"
import { UploadParam } from "../../types/Upload/upload.type"
import uploadRepositoryImpl from "../../repositories/Upload/uploadRepositoryImpl"

export const useUploadMutation = () =>{
    const mutation = useMutation((FileData:UploadParam)=>
        uploadRepositoryImpl.uploadFile(FileData)
    )
    return mutation;
}