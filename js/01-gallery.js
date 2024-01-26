import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const addItems = (e) => {
  const galleryHTML = galleryItems
    .map(
      (image) =>
        `<div class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source = "${image.original}"  alt="${image.description}"></a></div> `
    )
    .join("");
  gallery.insertAdjacentHTML("beforeend", galleryHTML);
};

addItems();

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  const lightbox = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
    `);

  lightbox.show();
});

console.log(gallery);
