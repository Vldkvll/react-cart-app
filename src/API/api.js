import axios from 'axios'

const instance = axios.create({
    headers: {
        contentType: 'application/json'
    },
    baseURL: `http://localhost:8000/products`,


});

export const getProductsJson = () => {
    return instance.get()
        .then(result => result)
}