let closeButton = document.querySelector(".popup__close-button");
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
function closePopup() {
  popup.classList.remove("popup_opened");
}
function openPopup() {
  popup.classList.add("popup_opened");
}
closeButton.addEventListener("click", closePopup);
editButton.addEventListener("click", openPopup);
