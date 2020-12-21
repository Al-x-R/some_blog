class AuthApi {

  constructor({ client }) {
    this.client = client;
    this.url = '/auth';
  }

  signin = data => {
    return this.client.post(`${this.url}/signin`, data);
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