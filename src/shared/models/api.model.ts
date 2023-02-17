export interface IAPIResponse<T> {
    success : boolean;
    data : T;
}

export interface ILoginRequest {
    email : string;
    password : string;
}