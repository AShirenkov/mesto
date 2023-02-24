let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
// let saveButton = document.querySelector('.popup__save-button');

let formContainer = document.querySelector('.popup__container');

let popup = document.querySelector('.popup');

let currentName = document.querySelector('.profile__name');
let currentDescriprion = document.querySelector('.profile__descr');
let editName = document.querySelector('.popup__input-text_type_name');
let editDescriprion = document.querySelector(
  '.popup__input-text_type_description'
);
// console.log(currentName);
function closePopup() {
  popup.classList.remove('popup_opened');
}
function openPopup() {
  editName.value = currentName.textContent;
  editDescriprion.value = currentDescriprion.textContent;

  popup.classList.add('popup_opened');
}
function savePopup(evt) {
  evt.preventDefault();
  currentName.textContent = editName.value;
  currentDescriprion.textContent = editDescriprion.value;

  popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
formContainer.addEventListener('submit', savePopup);
