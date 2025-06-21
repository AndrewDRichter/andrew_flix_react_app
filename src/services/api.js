import axios from "axios";
// BASE URL: https://api.themoviedb.org/3/

// OPTIONS:   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${api_key}`
//     }
//   }; 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;