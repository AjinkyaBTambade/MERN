// src/services/api.js
import axios from 'axios';

// Create an axios instance with base URL
const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your API base URL
});

export default instance;
