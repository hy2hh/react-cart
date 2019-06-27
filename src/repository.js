import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getProducts() {
  return axios.get(`${BASE_URL}/api/products`)
          .then(res => res.data);
}


export function getCartProducts(cart) {
  console.log(`cart >> ${cart}`);
  return axios.post(`${BASE_URL}/api/products`, {cart})
          .then(res => res.data);
}

export function login (data) {
  return axios.post(`${BASE_URL}/api/auth`, {
    name: data.name, password: data.password
  }).then(res => {
    localStorage.setItem('x-access-token', res.data.token);
    localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
    return res.data;
  }).catch(e => {
    Promise.reject('Authentication Failed!');
  })
}

export function isAuthenticated() {
  return localStorage.getItem('x-access-token') &&
        localStorage.getItem('x-access-token-expiration') > Date.now()
}