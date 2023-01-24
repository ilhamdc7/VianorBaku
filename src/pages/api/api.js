import axios from "axios";


export const baseUrl = axios.create({
  baseURL: `https://vianor.efgroup.az`,
});