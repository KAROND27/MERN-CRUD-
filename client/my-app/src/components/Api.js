import React from 'react';
import axios from 'axios'

const url="'http://localhost:5000/add'";
const Api = async(data) => {
  
    try {
      return await axios.post(`${url}/add`,data)
    } catch (error) {
      console.log(error)
    }
  
}

export default Api;