// import axios from 'axios';
// import { serviceOptions } from './service';

// const instance = axios.create({
//   timeout: 5000,
// });

// instance.interceptors.response.use((response) => {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   },
// );

// serviceOptions.axios = instance;


// const smallerAxisSize = Math.min(height, width);
// const isLandscape = width > height;
// const isTablet = smallerAxisSize >= 600;
// const appBarHeight = Platform.OS === 'ios' ? (isLandscape ? 32 : 44) : 56;
// const maxWidth = isTablet ? 320 : 280;
