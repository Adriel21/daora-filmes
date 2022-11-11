import axios from "axios";

// Usamos o axios para criar uma referência de endereço da API/Servidor (Chamado de baseURL)
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default api;