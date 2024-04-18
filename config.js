const BASE_URL = 'https://adcb-2409-408c-4e9e-b31f-525-9a19-f7fb-dde5.ngrok-free.app'
export const API_URL_USER = `${BASE_URL}/Eduslot/user`
export const API_URL_DEPARTMENT =  `${BASE_URL}/Eduslot/department`
export const API_URL_LABS = `${BASE_URL}/Eduslot/labs`
export const API_URL_CLASSES = `${BASE_URL}/Eduslot/classes`
export let USER_ID = null
export let token = null

export const setUserId = (newUserId) => {
  USER_ID = newUserId;
};



export const setToken = (newtoken) => {
    USER_ID = newtoken;
  };