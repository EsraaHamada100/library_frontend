export const API_URL = 'http://localhost:4000';
export const DEFAULT_HEADER = {
    "Content-Type": "application/json"
};


export let userData = null;
export const setUserData = (data) => {
    userData = data;
}

export const userRoles = {
    admin: 'admin',
    user: 'user',
    guest: 'guest'
}
