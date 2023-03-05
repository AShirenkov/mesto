const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

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

  closePopup();
}
closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
formContainer.addEventListener('submit', savePopup);

const cards = document.querySelector('.cards');

function handleRemoveBtnClick(event) {
  const button = event.target;
  const card = button.closest('.card');
  card.remove();
}
function handleLikeBtnClick(event) {
  console.log('rkbr');
  event.target.classList.toggle('card__like_active');
}

initialCards.forEach((card) => {
  const cardTemplate = document
    .querySelector('#cardTemplate')
    .content.cloneNode(true);
  const cardTitle = cardTemplate.querySelector('.card__title');
  cardTitle.textContent = card.name;

  const cardImg = cardTemplate.querySelector('.card__img');
  cardImg.setAttribute('src', card.link);
  cardImg.setAttribute('alt', 'Картинка ' + card.name);

  const removeCardButton = cardTemplate.querySelector('.card__trash-button');
  removeCardButton.addEventListener('click', handleRemoveBtnClick);

  const likeCardButton = cardTemplate.querySelector('.card__like');
  likeCardButton.addEventListener('click', handleLikeBtnClick);

  cards.append(cardTemplate);
});
