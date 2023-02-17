import { USER_TOKEN_PREFIX } from "../constants";

const setLocalStorageItem = (key : string, value : string) => {
    localStorage.setItem(key, value);
}

const getLocalStorageItem = (key : string) : string => {
    return localStorage.getItem(key) || "";
}

export const setUserToken = (token : string) => {
    setLocalStorageItem(USER_TOKEN_PREFIX, token);
}

export const getUserToken = () => {
    return getLocalStorageItem(USER_TOKEN_PREFIX);
}

export const isUserLoggedIn = () : boolean => {
    if(getUserToken()) return true;
    return false;
}