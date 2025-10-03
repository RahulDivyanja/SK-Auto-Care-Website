import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// export const getFilteredProducts = (brandName, search, category) => {
//   // If no brand, optionally fetch all products
//   if (!brandName) {
//     return API.get(`/products`, {
//       params: {
//         q: search || undefined,
//         category: category || undefined,
//       },
//     });
//   }

//   return API.get(`/brands/${encodeURIComponent(brandName)}`, {
//     params: {
//       q: search || undefined,
//       category: category || undefined,
//     },
//   });
// };
export default API;