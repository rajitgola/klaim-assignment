import { API_ENDPOINTS } from "../constants";
import { IAPIResponse, IAuthor, ILoginRequest, IQuote, IUser } from "../shared/models";

export function getCompanyInfo() : Promise<IAPIResponse<{info : string}>> {
    return new Promise<IAPIResponse<{info : string}>>((resolve, reject) => {
        fetch(`${API_ENDPOINTS.COMPANY.INFO}`, {
            method : "GET",
            headers : { "Accept" : "application/json", "Content-Type" : "application/json" }
        }).then(async res => {
            const response = await res.json();
            resolve(response);
        })
        .catch((e) => {
            reject(e)
        })
    })
}

////////////// AUTH APIs /////////////////

export function validateUser(login : ILoginRequest) : Promise<IAPIResponse<{token : string}>> {
    return new Promise<IAPIResponse<{token : string}>>((resolve, reject) => {
        fetch(`${API_ENDPOINTS.AUTH.LOGIN}`, {
            method : "POST",
            headers : { "Accept" : "application/json", "Content-Type" : "application/json"},
            body : JSON.stringify(login)
        }).then(async res => {
            const response = await res.json();
            resolve(response);
        })
        .catch((e) => {
            reject(e)
        })
    })
}

export function logOutUser() : Promise<IAPIResponse<{}>> {
    return new Promise<IAPIResponse<{}>>((resolve, reject) => {
        fetch(`${API_ENDPOINTS.AUTH.LOGOUT}`, {
            method : "DELETE",
            headers : { "Accept" : "application/json", "Content-Type" : "application/json"},
        }).then(async res => {
            const response = await res.json();
            resolve(response);
        })
        .catch((e) => {
            reject(e)
        })
    })
}

////////// USER APIs /////////////////////

export function getUserProfile() : Promise<IAPIResponse<IUser>> {
    return new Promise<IAPIResponse<IUser>>((resolve, reject) => {
        fetch(`${API_ENDPOINTS.USER.PROFILE}`, {
            method : "GET",
            headers : { "Accept" : "application/json", "Content-Type" : "application/json"},
        }).then(async res => {
            const response = await res.json();
            resolve(response);
        })
        .catch((e) => {
            reject(e)
        })
    })
}

export function getAuthorInfo() : Promise<IAPIResponse<IAuthor>> {
    return new Promise<IAPIResponse<IAuthor>>((resolve, reject) => {
        fetch(`${API_ENDPOINTS.USER.AUTHOR}`, {
            method : "GET",
            headers : { "Accept" : "application/json", "Content-Type" : "application/json"},
        }).then(async res => {
            const response = await res.json();
            resolve(response);
        })
        .catch((e) => {
            reject(e)
        })
    })
}

export function getAuthorQuote(authorId : number) : Promise<IAPIResponse<IQuote>> {
    return new Promise<IAPIResponse<IQuote>>((resolve, reject) => {
        fetch(`${API_ENDPOINTS.USER.QUOTE}`, {
            method : "GET",
            headers : { "Accept" : "application/json", "Content-Type" : "application/json"},
        }).then(async res => {
            const response = await res.json();
            resolve(response);
        })
        .catch((e) => {
            reject(e)
        })
    })
}