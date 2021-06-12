import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL_PROD,// "https://mlw-api.herokuapp.com/scrapper-api/v1/comments",
    headers: {
        'Content-Type': 'application/json',
    }
})

//"http://localhost:5000/scrapper-api/v1/comments",