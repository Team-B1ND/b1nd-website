import { useQuery } from 'react-query';
import UserRepositoryImpl from '../../repositories/User/UserRepositoryImpl';
import { User } from '../../types/User/user.token';

export const useUserQuery = () => {
    return useQuery<User>({
        queryKey: ['user', 'myinfo'],
        queryFn: () => UserRepositoryImpl.getMyinfo(),
        staleTime: 1000 * 60 * 10, 
        cacheTime: 1000 * 60 * 20, 
        keepPreviousData: true, 
    });
};


