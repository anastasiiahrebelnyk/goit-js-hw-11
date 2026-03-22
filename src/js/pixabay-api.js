import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let arr;

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
   return axios.get(`/api/?${searchParams}`)
    //     .then(response => {
            
    //         // console.log(response.data);
    //         if (response.data.total === 0) {
    //             iziToast.show({
    //                 color: 'red',
    // message: 'Sorry, there are no images matching your search query. Please try again!'
    //             });
    //         }
    //         arr = response.data.hits;
    //          console.log(arr);
    //          return arr;
            
    //     })
    //     .catch(error => {
    //         console.log(error);
                
    //     });
    
};
 

