const serverHost = 'localhost';
const serverPort = process.env.NODE_ENV || 3001;

const config = {
  api: {
    http: {
      baseURL: `http://${serverHost}:${serverPort}/api`,
    },
  },
};

export default config;