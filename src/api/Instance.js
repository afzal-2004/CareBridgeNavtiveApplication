// import axios from "axios";
// import { Platform } from "react-native";

// /**
//  * ENV SWITCH
//  */
// const isLive = true;

// /**
//  * BASE URL CONFIG
//  */
// const BASE_URL = isLive
//   ? "https://carebridgebackend.onrender.com/care"
//   : Platform.OS === "android"
//     ? "http://10.0.2.2:3000/care"
//     : "http://localhost:3000/care";

// /**
//  * AXIOS INSTANCE
//  */
// const api = axios.create({
//   baseURL: BASE_URL,
//   timeout: 15000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// /**
//  * REQUEST INTERCEPTOR
//  */
// api.interceptors.request.use(
//   async (config) => {
//     console.log("➡️ API REQUEST:", config.method?.toUpperCase(), config.url);
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// /**
//  * RESPONSE INTERCEPTOR
//  */
// api.interceptors.response.use(
//   (response) => {
//     console.log("✅ API RESPONSE:", response.status, response.config.url);
//     return response;
//   },
//   (error) => {
//     console.log(
//       "❌ API ERROR:",
//       error?.response?.status,
//       error?.response?.config?.url,
//     );
//     return Promise.reject(error);
//   },
// );

// export default api;

import axios from "axios";

const isLive = true;
// const isLive = false;

const BASE_URL = isLive
  ? "https://carebridgebackend.onrender.com/care"
  : "http://localhost:3000/care";

console.log("🌍 BASE_URL USED:", BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log("➡️ API REQUEST:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    console.log("✅ API RESPONSE:", response.status, response.config.url);
    return response;
  },
  (error) => {
    console.log(
      "❌ API ERROR:",
      error?.response?.status,
      error?.response?.config?.url,
    );
    return Promise.reject(error);
  },
);

export default api;
