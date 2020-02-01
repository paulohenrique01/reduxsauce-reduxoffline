import axios from 'axios';

// Default config options
const defaultOptions = {  
  baseURL: 'http://localhost:4000/api/',  
  headers: {
    'Content-Type': 'application/json'
  }
};

// Create instance
const instance = axios.create(defaultOptions);


export default instance;