import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createItems = (images) =>
  images
    .map(
      (image) =>
        `<li  class="gallery__item">
         <a   "gallery__link" href="${image.original}">
         <img
            class="gallery__image"
            src="${image.preview}"
            alt="${image.description}"
            />
         </a>
         </li>`
    )
    .join("");

const addItems = createItems(galleryItems);

gallery.innerHTML = addItems;

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionType: "attr",
  captionDelay: 250,
});
