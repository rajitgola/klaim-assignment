export const API_URL = process.env.REACT_APP_API_URL;

export const API_ENDPOINTS = {
    COMPANY : {
        INFO : `${API_URL}/info`
    },
    AUTH : {
        LOGIN : `${API_URL}/login`,
        LOGOUT : `${API_URL}/logout`,
    },
    USER : {
        PROFILE : `${API_URL}/profile`,
        AUTHOR : `${API_URL}/author`,
        QUOTE : `${API_URL}/quote`
    }
}