import AuthRepositoryImpl from "../../repositories/Auth/AuthRepositoryImpl";
import { LoginParam } from "../../repositories/Auth/AuthRepository";
import { useMutation } from "react-query";

export const usePostLoginMutation = () => {
  const mutation = useMutation(({ code }: LoginParam) =>
    AuthRepositoryImpl.login({ code })
  );

  return mutation;
};