import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:8000/products`,


});

export const getProductsJson = () => {
    return instance.get()
        .then(result => result)
}