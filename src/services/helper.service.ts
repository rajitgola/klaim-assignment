import { USER_TOKEN_PREFIX } from "../constants";

///// Private Methods ////

const setLocalStorageItem = (key : string, value : string) => {
    localStorage.setItem(key, value);
}

const getLocalStorageItem = (key : string) : string => {
    return localStorage.getItem(key) || "";
}

const removeLocalStorageItem = (key : string) => {
    localStorage.removeItem(key);
}

/// Public exposed methods /////

export const setUserToken = (token : string) => {
    setLocalStorageItem(USER_TOKEN_PREFIX, token);
}

export const getUserToken = () => {
    return getLocalStorageItem(USER_TOKEN_PREFIX);
}

export const clearUserToken = () => removeLocalStorageItem(USER_TOKEN_PREFIX)

export const isUserLoggedIn = () : boolean => {
    if(getUserToken()) return true;
    return false;
}