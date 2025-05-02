// src/services/api.js
import axios from 'axios';

dotenv.config();
const api ={
  ali: axios.create({
  baseURL: process.env.ALI_API_BASE}),
  mock: ()=> {return [
    { nome: 'Product A',  preco: 100.00, descricao: `  This is a fake product for showing 
something when the fetch to aliexpress api fails during development.
  This should replace the standard description of the product that the online store is
selling.`},
    { nome: 'Product B', preco: 185.50, descricao: `  This another fake produto for placeholding
the stores template for displaying products to the user.     
  This is like the product description. Like it is 3.4cm large and 2.8 cm tall with an area of   
250 square meters.
  You will like it. Just BUY it. NOW!`}
  ]},
}

export default api;
