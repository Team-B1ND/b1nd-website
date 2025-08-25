import AuthRepositoryImpl from "../../repositories/Auth/AuthRepositoryImpl";
import { LoginParam } from "../../repositories/Auth/AuthParmas";
import { useMutation } from "react-query";

export const usePostLoginMutation = () => {
  const mutation = useMutation(
    ({ code }: LoginParam) => AuthRepositoryImpl.login({ code }),
    { retry: 0 }
  );

  return mutation;
};