import { galleryItems } from "./gallery-items.js";
// Change code below this line

const cardsList = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");
cardsList.insertAdjacentHTML("afterbegin", galleryList);

const modal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  navText: ["◀", "▶"],
  closeText: "✖",
});
