import axios from 'axios';
// funcion encargada de hacer la petición
export const getDataFromApi = (url) => {
    return axios.get(url)
        .then(({ data }) => {
            return data;
        });
};