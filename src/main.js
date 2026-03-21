import iziToast from "izitoast";
import { getImagesByQuery } from "./js/pixabay-api";

const refs = {
    formEl: document.querySelector('.form'),
    searchButtonEl: document.querySelector('button'),
};

refs.formEl.addEventListener('submit', onSubmit);



function onSubmit(e) {
    e.preventDefault ();
    const formData = new FormData(refs.formEl);
    const query = formData.get('search-text').trim();
    if (query === '') {
         iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!'
         });
        return
    }
    getImagesByQuery(query);
}