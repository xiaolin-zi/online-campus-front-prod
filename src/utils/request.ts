import axios from 'axios';
import { reqSuccessCallback, respSuccessCallback, errCallback } from '@/utils/interceptor';
const gatewayRequest = axios.create({
  baseURL: 'https://117.72.15.203/',
  timeout: 90000,
});

const userRequest = axios.create({
  baseURL: 'https://117.72.15.203/CampusUser/',
  timeout: 90000,
});

const messageRequest = axios.create({
  baseURL: 'https://117.72.15.203/campusMessage/',
  timeout: 90000,
});

const contactRequest = axios.create({
  baseURL: 'https://117.72.15.203/campusContact/',
  timeout: 90000,
});

const ossRequest = axios.create({
  baseURL: 'https://117.72.15.203/campusOss/',
  timeout: 90000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});




const parttimeRequest = axios.create({
  baseURL: 'https://117.72.15.203/campusParttime',
  timeout: 90000,
});

const tradeRequest = axios.create({
  baseURL: 'https://117.72.15.203/campusTrade',
  timeout: 90000,
});

gatewayRequest.interceptors.request.use(reqSuccessCallback, errCallback);
gatewayRequest.interceptors.response.use(respSuccessCallback, errCallback);

userRequest.interceptors.request.use(reqSuccessCallback, errCallback);
userRequest.interceptors.response.use(respSuccessCallback, errCallback);

messageRequest.interceptors.request.use(reqSuccessCallback, errCallback);
messageRequest.interceptors.response.use(respSuccessCallback, errCallback);

contactRequest.interceptors.request.use(reqSuccessCallback, errCallback);
contactRequest.interceptors.response.use(respSuccessCallback, errCallback);

ossRequest.interceptors.request.use(reqSuccessCallback, errCallback);
ossRequest.interceptors.response.use(respSuccessCallback, errCallback);

parttimeRequest.interceptors.request.use(reqSuccessCallback, errCallback);
parttimeRequest.interceptors.response.use(respSuccessCallback, errCallback);

tradeRequest.interceptors.request.use(reqSuccessCallback, errCallback);
tradeRequest.interceptors.response.use(respSuccessCallback, errCallback);

export {
  gatewayRequest,
  userRequest,
  messageRequest,
  contactRequest,
  ossRequest,
  parttimeRequest,
  tradeRequest
}
