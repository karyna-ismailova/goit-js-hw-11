import axios from 'axios';



const API_KEY = '49130705-dcf2ba3ffc1780735e7549732';
const BASE_URL = 'https://pixabay.com/api/';
export async function fetchImages(query) {
return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    })
    .then(function (response) {
        return response.data.hits;
    })
    .catch(function (error) {
        console.error('Error fetching images:', error);
        return [];
    });
}

