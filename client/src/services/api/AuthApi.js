import { ACCESS_TOKEN_KEY } from '../../constants';

class AuthApi {
  client;
  token;

  constructor({ client }) {
    this.client = client;
    this.token = null;
    this.url = '/auth';

    this.client.interceptors.request.use(
      this.interceptRequest,
      err => Promise.reject(err));
    this.client.interceptors.response.use(
      this.interceptResponse,
      // this.interceptResponseError,
    );
  }

  interceptRequest = config => {
    this.token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (this.token) {
      config.headers['Authorization'] = `Bearer ${this.token}`;
    }
    return config;
  };


  interceptResponse = response => {
    const {
      config: {url},
      data,
    } = response;

    if (url.indexOf(this.url) === 25) {
      const {
        data: {
          token: {token},
        },
      } = data;
      this.token = token;
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
    return response;
  }


  signin = data => {
    console.log('data => ', data)
    return this.client.post(`${this.url}`, data);
  };

  signup = data => {
    return this.client.post(`${this.url}/signup`, data);
  };

  refresh = data => {

  };

  logout = () => {

  };
}

export default AuthApi;