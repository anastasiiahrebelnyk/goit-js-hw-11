import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery } from "./js/render-functions";

export const refs = {
    formEl: document.querySelector('.form'),
    searchButtonEl: document.querySelector('button'),
    galleryEl: document.querySelector('.gallery'),
};

refs.formEl.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    clearGallery();
    const formData = new FormData(refs.formEl);
    const query = formData.get('search-text').trim();
    refs.formEl.reset();   
    if (query === '') {
         iziToast.show({
    message: 'Empty'
         });
        return
    }
    getImagesByQuery(query)
        .then(response => {
            createGallery(response.data.hits);
        })
        .catch(error => {
            iziToast.show({ message: 'Error' });
            console.log(error);
        });
             
    
}