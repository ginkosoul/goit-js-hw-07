import { galleryItems } from './gallery-items.js';
// Change code below this line
// import SimpleLightbox from "simplelightbox"

console.log(galleryItems);
// console.log(SimpleLightbox);
const galleryElement = document.querySelector('ul.gallery');

const createGalleryElementMarkupFromObject = ({preview, original, description}) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;

const createGalleryMarkup = galleryItems
  .map(createGalleryElementMarkupFromObject)
  .join(``);

galleryElement.insertAdjacentHTML('afterbegin',createGalleryMarkup);

galleryElement.addEventListener('click',onClick)

const galleryLinks = galleryElement.querySelectorAll('a')
// console.log(galleryLinks);

let gallery = new SimpleLightbox(galleryLinks);

gallery.on('show.simplelightbox', function () {
	// Do something…
});

function onClick(event){
    event.preventDefault();
}