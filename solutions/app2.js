'use strict';

/* const setCookie = (name, value,  expirationMin = 15, path = '/') => {
    const now = new Date();
    now.setTime(now.getTime() + (expirationMin * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=${path}`;
  };

  setCookie('viewed', 5);
  setCookie('uid', 354774631237);
  setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF'); */
  
  const cookieHandler = {
      getAll() {
          const nameValuePairs = document.cookie.split('; ').map(item => item.split('='))
          let cookieObj = {}
          nameValuePairs.forEach(item => {
              let key = item[0];
              let value = item[1];
              cookieObj[key] = value;
          } )
           return cookieObj
      },
      toSessionStorage() {
          const cookieObj = cookieHandler.getAll();
          for (let key in cookieObj) {
              sessionStorage.setItem(key, cookieObj[key])
          }
      },
      flush() {
          const cookieObj = cookieHandler.getAll();
          for (let key in cookieObj) {
          document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
          }
      }  
  }

export { cookieHandler };