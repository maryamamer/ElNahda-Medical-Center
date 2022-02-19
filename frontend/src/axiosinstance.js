import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://localhost:8000";

let tokens = localStorage.getItem("authtokens")
  ? JSON.parse(localStorage.getItem("authtokens"))
  : null;

const axiosinstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${tokens.access}`,
  },
});

axiosinstance.interceptors.request.use(async (req) => {
    if (!tokens){
        tokens = localStorage.getItem("authtokens")
    ? JSON.parse(localStorage.getItem("authtokens"))
    : null;
    req.headers.Authorization = `Bearer ${tokens.access}`

    }
    const user=jwt_decode(tokens.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) <1;
    if(!isExpired) return req

    const resp = await axios.post(`${baseURL}/api/token/refresh/`,{
        refresh:tokens.refresh

    })
    localStorage.setItem('authtokens',JSON.stringify(resp.data))
    req.headers.Authorization = `Bearer ${response.data.access}`
  
  return req;
});

export default axiosinstance;
