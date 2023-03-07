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

let editProfileButton = document.querySelector('.profile__edit-button');
let currentName = document.querySelector('.profile__name');
let currentDescriprion = document.querySelector('.profile__descr');

let popupProfile = document.querySelector('.popup_type_profile');

let formEditProfile = document.forms.formEditProfile;
let popupProfileName = formEditProfile.elements.nameProfile;
let popupProfileDescription = formEditProfile.elements.descriptionProfile;

let popupProfileSaveButton = popupProfile.querySelector('.popup__save-button');

let popupProfileCloseButton = popupProfile.querySelector(
  '.popup__close-button'
);

let popupCard = document.querySelector('.popup_type_card');
let formAddCard = document.forms.formAddCard;

let popupCardNamePlace = formAddCard.elements.namePlace;
let popupCardUrlPlace = formAddCard.elements.urlPlace;
console.log(popupCardNamePlace);
let popupCardCloseButton = popupCard.querySelector('.popup__close-button');

let addCardButton = document.querySelector('.card__add-button');

const cards = document.querySelector('.cards');

/*Функции закрытия попапа по нажатию кнопки крестик*/
const closePopupProfile = () => {
  closePopup(popupProfile);
};

const closePopupCard = () => {
  closePopup(popupCard);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

/*Функция открытия произвольного попапа*/
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

/*Функция открытия окна с параметрами пользователя*/
const openPopupProfile = () => {
  popupProfileName.value = currentName.textContent;
  popupProfileDescription.value = currentDescriprion.textContent;

  openPopup(popupProfile);
};

/*Функция открытия окна добавления новой карточки*/
const openPopupAddCard = () => {
  openPopup(popupCard);
};

editProfileButton.addEventListener('click', openPopupProfile);
addCardButton.addEventListener('click', openPopupAddCard);

const savePopupProfile = (event) => {
  event.preventDefault();
  currentName.textContent = popupProfileName.value;
  currentDescriprion.textContent = popupProfileDescription.value;

  closePopup(popupProfile);
};

formEditProfile.addEventListener('submit', savePopupProfile);

const createNewCard = (event) => {
  event.preventDefault();
  let cardTemplate = createCard(
    popupCardNamePlace.value,
    popupCardUrlPlace.value
  );
  popupCardNamePlace.value = '';
  popupCardUrlPlace.value = '';

  cards.prepend(cardTemplate);
  closePopupCard();
};

formAddCard.addEventListener('submit', createNewCard);

popupCardCloseButton.addEventListener('click', closePopupCard);
popupProfileCloseButton.addEventListener('click', closePopupProfile);

/*Функция отрисовки карточки и подписки на события*/
const createCard = (name, src) => {
  const cardTemplate = document
    .querySelector('#cardTemplate')
    .content.cloneNode(true);
  const cardTitle = cardTemplate.querySelector('.card__title');
  cardTitle.textContent = name;

  const cardImg = cardTemplate.querySelector('.card__img');
  cardImg.setAttribute('src', src);
  cardImg.setAttribute('alt', 'Картинка ' + name);

  const removeCardButton = cardTemplate.querySelector('.card__trash-button');
  removeCardButton.addEventListener('click', handleRemoveBtnClick);

  const likeCardButton = cardTemplate.querySelector('.card__like');
  likeCardButton.addEventListener('click', handleLikeBtnClick);

  return cardTemplate;
};

/*Функция удаления карточки*/
const handleRemoveBtnClick = (event) => {
  const button = event.target;
  const card = button.closest('.card');
  card.remove();
};
/*Функция установки лайка на карточке*/
const handleLikeBtnClick = (event) => {
  event.target.classList.toggle('card__like_active');
};

initialCards.forEach((card) => {
  let cardTemplate = createCard(card.name, card.link);

  cards.append(cardTemplate);
});
