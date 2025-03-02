import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');

export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images.map(image => `
        <li class = "list">
        <a href="${image.largeImageURL}" class="gallery-item">
            <img src="${image.webformatURL}" alt="${image.tags}">
            <ul class="info">
                <li>Likes<br>${image.likes}</li>
                <li>Views<br>${image.views}</li>
                <li>Comments<br>${image.comments}</li>
                <li>Downloads<br>${image.downloads}</li>
            </ul>
        </a></li>
    `).join('');
    lightbox.refresh();
}

export function showErrorMessage() {
    iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
}

export function showLoader() {
    if (loader) loader.style.display = 'block';
}

export function hideLoader() {
    if (loader) loader.style.display = 'none';
}
