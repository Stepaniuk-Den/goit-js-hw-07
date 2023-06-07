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
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");
cardsList.insertAdjacentHTML("afterbegin", galleryList);
cardsList.addEventListener("click", handleImgClick);

function handleImgClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const currentList = evt.target.closest(".gallery__image");
  const sourceList = currentList.dataset.source;
  const currentDescr = currentList.alt;

  const instance = basicLightbox.create(`
    <img
   src="${sourceList}"
    alt="${currentDescr}"
  />
`);
  instance.show();
  document.addEventListener("keydown", (evt) =>
    evt.key === "Escape" ? instance.close() : null
  );
}
