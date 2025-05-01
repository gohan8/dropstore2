// src/services/api.js
import axios from 'axios';
import dorenv from 'dotenv';

const api ={
  ali: axios.create({
  baseURL: dotenv.env.ALI_API_BASE, //'https://sua-api-node.onrender.com', // Altere para o endereço do seu backend
  }),
  mock: ()=> return [
    { nome: 'Product A',  preco: 100.00, descricao: `  This is a fake product for showing 
something when the fetch to aliexpress api fails during development.
  This should reoplce the standard description of the product that the online store is
selling.`},
    { nome: 'Product B', preco: 185.50, descricao: `  This another fake produto for placeholding
the stores template for displaying products to the user.     
  This is like the produc description. Like it is 3.4cm large and 2.8 cm tall with an area of   
250 square meters.
  You will like it. Just BUY it. NOW!`}
  ],
}



export default api;
