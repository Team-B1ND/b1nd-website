type UserRole = 'ADMIN' | 'STUDENT' ;

export interface User{
    user_id: number;
    user_name: string;
    user_email: string;
    user_role:UserRole;
}