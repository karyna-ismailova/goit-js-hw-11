import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showErrorMessage, showLoader, hideLoader} from './js/render-function.js';



document.querySelector('.search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value.trim();
    
    if (!query) {
        showErrorMessage();
        return;
    }
    showLoader(
        
    );
    
    
    
    const images = await fetchImages(query);
     hideLoader();
    if (images.length > 0) {
        renderGallery(images);
    } else {
        showErrorMessage();
    }
});