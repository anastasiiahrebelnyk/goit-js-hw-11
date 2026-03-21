import axios from "axios";



export function getImagesByQuery(query) {
    axios.defaults.baseURL = 'https://pixabay.com';
    // const APIKey = '55116148-63b4b48da282efb6025f7a072';
    // axios.defaults.headers.common.key = APIKey;
    const searchParams = new URLSearchParams({
        key: '55116148-63b4b48da282efb6025f7a072',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    })
    axios.get(`/api/?${searchParams}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
                
        });
    
};
 