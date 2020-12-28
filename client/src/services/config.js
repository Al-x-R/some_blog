const serverHost = 'localhost';
const serverPort = 3001;

const config = {
  api: {
    http: {
      baseURL: `http://${serverHost}:${serverPort}/api/v1`,
    },
  },
};

export default config;