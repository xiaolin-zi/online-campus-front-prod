import axios from "axios";
import { request } from "http";

export const contactRequest = axios.create({
  baseURL: '/contact-api',
  timeout: 90000,
  headers: {
    uid: 't2',
    token: 't2'
  }
});

export const ossRequest = axios.create({
  baseURL: '/oss-api',
  timeout: 90000,
  headers: {
    uid: 't2',
    token: 't2',
    'Content-Type': 'multipart/form-data'
  }
});

export const parttimeRequest = axios.create({
  baseURL:'/parttime-api',
  timeout:90000,
  headers:{
    token:'t1',
  }
})

export default axios