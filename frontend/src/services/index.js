import axios from 'axios';

// process.env.NODE_ENV === 'production'
//   ? (const baseURL = 'here should be your production endpoint')
//   : (const baseURL = 'http://localhost:3000');
const baseURL = 'http://localhost:3000/api'


const SERVICE = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await SERVICE.get('/')
  },
  signup: async user => {
    return await SERVICE.post('/signup', user)
  },
  login: async user => {
    return await SERVICE.post('/login', user)
  },
  logOut: async () => {
    return await SERVICE.get('/logout')
  }
};

export default MY_SERVICE;
