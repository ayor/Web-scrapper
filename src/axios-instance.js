import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://mlw-api.herokuapp.com/scrapper-api/v1/comments",
    headers: {
        'Content-Type': 'application/json',
    }
})
