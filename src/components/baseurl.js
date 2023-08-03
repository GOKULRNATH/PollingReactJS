import axios from 'axios';

const axiosInstance = axios.create({

  //server api
        //baseURL: 'https://grnmypics.onrender.com/myapp', 

//   , 

//local api

   baseURL: 'http://localhost:4000/poll',  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance