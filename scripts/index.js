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

const popupCard = document.querySelector('.popup_type_card');
const formAddCard = document.forms.formAddCard;

const popupCardNamePlace = formAddCard.elements.namePlace;
const popupCardUrlPlace = formAddCard.elements.urlPlace;

const addCardButton = document.querySelector('.profile__card-add-button');

const cardsContainer = document.querySelector('.cards');

const popupImg = document.querySelector('.popup_type_img');
const popupImgPicture = popupImg.querySelector('.popup__card-img');
const popupImgText = popupImg.querySelector('.popup__text-img');

const cardTemplate = document
  .querySelector('#cardTemplate')
  .content.querySelector('.card');

/*Функции закрытия попапа по нажатию кнопки крестик*/

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

document.querySelectorAll('.popup__close-button').forEach((button) => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});

/*Функция отмены всплытия*/
const stopProp = (child) => {
  child.addEventListener('click', (evt) => evt.stopPropagation());
};
/*функция закрытия попапа по клику на Overlay*/
document.querySelectorAll('.popup').forEach((popupWindow) => {
  stopProp(popupWindow.firstElementChild); //сперва хотел пройтись рекурсивно по всем дочерним узлам, но по нашей разметке у нас всегда есть один основной дочерий
  popupWindow.addEventListener('click', () => closePopup(popupWindow));
});

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

const openPopupImg = (src, name) => {
  popupImgPicture.setAttribute('src', src);
  popupImgPicture.setAttribute('alt', name);
  popupImgText.textContent = name;
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
  const newCard = createCard(popupCardNamePlace.value, popupCardUrlPlace.value);

  formAddCard.reset();

  cardsContainer.prepend(newCard);
  closePopup(popupCard);
};

formAddCard.addEventListener('submit', createNewCard);

/*Функция отрисовки карточки и подписки на события*/
const createCard = (name, src) => {
  const newCard = cardTemplate.cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = name;

  const cardImg = newCard.querySelector('.card__img');
  cardImg.setAttribute('src', src);
  cardImg.setAttribute('alt', name);

  cardImg.addEventListener('click', () => openPopupImg(src, name));

  const removeCardButton = newCard.querySelector('.card__trash-button');
  removeCardButton.addEventListener('click', () => removeCardBtnClick(newCard));

  const likeCardButton = newCard.querySelector('.card__like');
  likeCardButton.addEventListener('click', () => likeBtnClick(likeCardButton));

  return newCard;
};

/*Функция удаления карточки*/
const removeCardBtnClick = (card) => {
  card.remove();
};
/*Функция установки лайка на карточке*/
const likeBtnClick = (buttonLike) => {
  buttonLike.classList.toggle('card__like_active');
};

initialCards.forEach((card) => {
  const newCard = createCard(card.name, card.link);

  cardsContainer.append(newCard);
});
