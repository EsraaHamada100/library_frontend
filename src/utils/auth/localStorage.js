const userDataStorageKey = 'user_id';

export const cacheUserData = (userData) => {
    const userDataJson = JSON.stringify(userData);
    console.log(userDataJson);
    localStorage.setItem(userDataStorageKey, userDataJson);
    console.log('we cached the data successfully');

}

export const getCachedUserData = () => {
    console.log('we are getting the data of cached user');
    const userDataJson = localStorage.getItem(userDataStorageKey);
    const userData = JSON.parse(userDataJson);
    return userData;
}

export const deleteCachedUserData = ()=>{
    localStorage.removeItem(userDataStorageKey);
}


