import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/"
})

// export const mocApi = axios.create({
//   baseURL: "https://640222533779a86262661aca.mockapi.io/"
// })


