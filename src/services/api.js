import axios from "axios";

// Usamos o axios para criar uma referência de endereço da API/Servidor (Chamado de baseURL)
const api = axios.create({
    baseURL: 'https://tec-api.onrender.com',
});

export default api;