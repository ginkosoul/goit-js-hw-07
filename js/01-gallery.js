import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from './basicLightbox.min.js'
// const basicLightbox = require('basiclightbox')

// console.log(galleryItems);
const galleryElement = document.querySelector('.gallery');
// console.log(galleryElement);

// let instance = basicLightbox.create(`
//   <img src="" width="1280">
// `);

const instance = basicLightbox.create(`
    <img src="" width="1280">
`);

// console.log(instance);

const createGalleryElementMarkupFromObject = ({preview, original, description}) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`;

const createGalleryMarkupFromImages = galleryItems
  .map(createGalleryElementMarkupFromObject)
  .join(``);

galleryElement.insertAdjacentHTML('afterbegin',createGalleryMarkupFromImages);
// console.log(createGalleryMarkupFromImages)

// galleryElement

galleryElement.addEventListener('click', onClick)

function onClick(event) {
    
    event.preventDefault();

    const image = event.target.dataset.source;
    // const imageLink = event.target.closest('.gallery__link');
    // imageLink.preventDefault;
    // console.log(imageLink)
    changeImageModal(instance,image);

    window.addEventListener('keydown', onImageClose)
    
    instance.show()
}

function onImageClose(event){
    if (event.code === `Escape`) {
        instance.close();
        window.removeEventListener('keydown', onImageClose)
    }
    // console.log(event.code)
}


function changeImageModal(instance,url){

  // instance.insertAdjacentHTML(`
  // <img src="#" width="1280">
  // `)

  // instance.innerHTML = '';

  // instance.appendChild()
  // console.log(instance);

  const modalElement = instance.element().querySelector('.basicLightbox__placeholder');
  modalElement.innerHTML = `
  <img src="${url}" width="1280">
  `;
  // console.log(modalElement);
}
