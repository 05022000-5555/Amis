import axios from 'axios'


const baseService = axios.create({
  baseURL: 'https://localhost:44388/api/',
  headers: {
    'Accept': 'application/json',
    'Accept-Language': 'es',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Response-Type':'json'
    
  },
  //withCredentials: true
})

baseService.interceptors.response.use(
  function (response) {
    // Return unwrapped response ---the "body" of it
    return response.data
  },
  function (error) {
    // TODO: Do proper error handling here (logout user, etc)
    console.error(error)
    return 
  }
)


export default baseService