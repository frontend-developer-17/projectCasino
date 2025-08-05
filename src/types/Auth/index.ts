export enum BaseUrl {"http://localhost:5000"}
 type User={
    id:number,
    name:string,
    email:string
}
export interface AuthResponse{
    message:string,
    user:User,
    accessToken:string,
}
export type FormData={
    email:string,
    userName:string,
    password:string
}

export type ResponseCurrentUser = Pick<AuthResponse, "message"|"user">
export type ResponseUpdateToken = Pick<AuthResponse, "accessToken" >


