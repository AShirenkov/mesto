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

let addCardButton = document.querySelector('.card__add-button');

const closePopup = (event) => {
  const button = event.target;
  const popup = button.closest('.popup');

  popup.classList.remove('popup_opened');
};

const openPopup = (popup, inputFieldTop, inputFieldBottom) => {
  let editName = popup.querySelector('.popup__input-text_type_name');
  let editDescription = popup.querySelector(
    '.popup__input-text_type_description'
  );
  let placeName = popup.querySelector('.popup__input-text_type_name-place');
  let editUrl = popup.querySelector('.popup__input-text_type_url-place');
  if (inputFieldTop !== '') {
    editName.value = inputFieldTop;
    editDescription.value = inputFieldBottom;
  } else {
    placeName.value = inputFieldTop;
    editUrl.value = inputFieldBottom;
  }

  popup.classList.add('popup_opened');
};

const openPopupProfile = () => {
  const popup = document.querySelector('.popup_type_profile');

  const name = currentName.textContent;
  const description = currentDescriprion.textContent;

  openPopup(popup, name, description);
};
const openPopupAddCard = () => {
  const popup = document.querySelector('.popup_type_card');

  openPopup(popup, '', '');
};

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

  cards.prepend(cardTemplate);
};

const savePopup = (event) => {
  event.preventDefault();
  const button = event.target;
  const popup = button.closest('.popup');
  let editName = popup.querySelector('.popup__input-text_type_name');
  let editDescription = popup.querySelector(
    '.popup__input-text_type_description'
  );
  let placeName = popup.querySelector('.popup__input-text_type_name-place');
  let editUrl = popup.querySelector('.popup__input-text_type_url-place');

  if (editUrl === null) {
    currentName.textContent = editName.value;

    currentDescriprion.textContent = editDescription.value;
  } else {
    createCard(placeName.value, editUrl.value);
  }

  closePopup(event);
};

editProfileButton.addEventListener('click', openPopupProfile);

addCardButton.addEventListener('click', openPopupAddCard);

let popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  const closeButton = popup.querySelector('.popup__close-button');
  const formContainer = popup.querySelector('.popup__container');

  closeButton.addEventListener('click', closePopup);
  formContainer.addEventListener('submit', savePopup);
});

const cards = document.querySelector('.cards');

const handleRemoveBtnClick = (event) => {
  const button = event.target;
  const card = button.closest('.card');
  card.remove();
};
const handleLikeBtnClick = (event) => {
  event.target.classList.toggle('card__like_active');
};

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
