import axios from 'axios';

export default {
  login: function(creds) {
    return axios.post('/api/users/login', creds)
  },
  loginCheck: function() {
    return axios.get('/api/users/login')
  },
  logout: function() {
    return axios.get('/api/users/logout')
  },
  register: function(creds) {
    return axios.post('/api/users/register', creds)
  }
}