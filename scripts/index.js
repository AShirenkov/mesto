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

const editProfileButton = document.querySelector('.profile__edit-button');
const currentName = document.querySelector('.profile__name');
const currentDescriprion = document.querySelector('.profile__descr');

const popupProfile = document.querySelector('.popup_type_profile');

const formEditProfile = document.forms.formEditProfile;
const popupProfileName = formEditProfile.elements.nameProfile;
const popupProfileDescription = formEditProfile.elements.descriptionProfile;

const popupProfileSaveButton = popupProfile.querySelector(
  '.popup__save-button'
);

const popupProfileCloseButton = popupProfile.querySelector(
  '.popup__close-button'
);

const popupCard = document.querySelector('.popup_type_card');
const formAddCard = document.forms.formAddCard;

const popupCardNamePlace = formAddCard.elements.namePlace;
const popupCardUrlPlace = formAddCard.elements.urlPlace;

const popupCardCloseButton = popupCard.querySelector('.popup__close-button');

const addCardButton = document.querySelector('.card__add-button');

const cards = document.querySelector('.cards');

const popupImg = document.querySelector('.popup_type_img');
const popupImgPicture = popupImg.querySelector('.popup__card-img');
const popupImgText = popupImg.querySelector('.popup__text-img');
const popupImgCloseButton = popupImg.querySelector('.popup__close-button');

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
const closePopupImg = () => {
  closePopup(popupImg);
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

/*Функция открытия окна добавления новой карточки*/
const openPopupImg = (event) => {
  const button = event.target;
  const src = button.getAttribute('src');
  const text = button.getAttribute('alt');
  popupImgPicture.setAttribute('src', src);
  popupImgPicture.setAttribute('alt', text);
  popupImgText.textContent = text;

  openPopup(popupImg);
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
  const cardTemplate = createCard(
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
popupImgCloseButton.addEventListener('click', closePopupImg);

/*Функция отрисовки карточки и подписки на события*/
const createCard = (name, src) => {
  const cardTemplate = document
    .querySelector('#cardTemplate')
    .content.cloneNode(true);
  const cardTitle = cardTemplate.querySelector('.card__title');
  cardTitle.textContent = name;

  const cardImg = cardTemplate.querySelector('.card__img');
  cardImg.setAttribute('src', src);
  cardImg.setAttribute('alt', name);

  const removeCardButton = cardTemplate.querySelector('.card__trash-button');
  removeCardButton.addEventListener('click', handleRemoveBtnClick);

  const likeCardButton = cardTemplate.querySelector('.card__like');
  likeCardButton.addEventListener('click', handleLikeBtnClick);

  const imgCardButton = cardTemplate.querySelector('.card__img');
  imgCardButton.addEventListener('click', openPopupImg);

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
