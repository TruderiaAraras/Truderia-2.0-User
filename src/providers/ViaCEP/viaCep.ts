import axios from "axios";

const viaCep = axios.create({
    baseURL: " viacep.com.br/ws/"
});


export default viaCep;