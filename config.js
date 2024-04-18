const BASE_URL = 'https://d44d-182-156-2-170.ngrok-free.app'
export const API_URL_USER = `${BASE_URL}/Eduslot/user`
export const API_URL_DEPARTMENT =  `${BASE_URL}/Eduslot/department`
export const API_URL_LABS = `${BASE_URL}/Eduslot/labs`
export const API_URL_CLASSES = `${BASE_URL}/Eduslot/classes`
export const API_URL_YEARS = `${BASE_URL}/Eduslot/years`
export let USER_ID = null
export let token = null

export const setUserId = (newUserId) => {
  USER_ID = newUserId;
};



export const setToken = (newtoken) => {
    USER_ID = newtoken;
  };