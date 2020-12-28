import axios from 'axios';
import config from '../config';
import AuthApi from './AuthApi';

const {
  api: { http },
} = config;
console.log('http => ', http)

const client = axios.create(http);

export const auth = new AuthApi({ client });

export default client;