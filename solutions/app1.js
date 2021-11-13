'use strict'


const setCookie = (value,  expirationMin = 15, path = '/') => {
    const now = new Date();
    now.setTime(now.getTime() + (expirationMin * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `token=${value};expires=${expires};path=${path}`;
};


export default setCookie;