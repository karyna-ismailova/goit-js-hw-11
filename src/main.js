import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showErrorMessage, showLoader, hideLoader} from './js/render-function.js';



document.querySelector('.search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value.trim();

    const gallery = document.querySelector('.gallery'); 
    gallery.innerHTML = '';
    
    if (!query) {
        showErrorMessage();
        return;
    }
    showLoader(
        
    );
    
    
    
    fetchImages(query)
        .then(function (images) {
            hideLoader();
            if (images.length > 0) {
                renderGallery(images);
            } else {
                showErrorMessage();
            }
        })
        .catch(function (error) {
            hideLoader();
        
            showErrorMessage();
        });
});