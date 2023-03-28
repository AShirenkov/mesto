import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import {
  validationConfig,
  initialCards,
  editProfileButton,
  addCardButton,
  cardTemplate,
  cardsContainer,
  popupCard,
  popupProfile,
  popupProfileName,
  popupProfileDescription,
  currentName,
  currentDescriprion,
  popupCardNamePlace,
  popupCardUrlPlace,
} from './constants.js';
/*Функции закрытия попапа по нажатию кнопки крестик*/

const handleEscape = (evt) => {
  const keyName = evt.key;

  if (keyName === 'Escape') {
    checkAndCloseOpenedPopup();
  }
};
/*Подписка на событие нажатия Escape*/
const addEscapeListener = () => {
  document.addEventListener('keydown', handleEscape);
};
const removeEscapeListener = () => {
  document.removeEventListener('keydown', handleEscape);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', () => closePopup(popup));
  removeEscapeListener();
};

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    //Отличная идея со всплытием события и обработкой двух действий в родительском объекте
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains('popup__close-button')
    ) {
      closePopup(popup);
    }
  });
});

/*Функция открытия произвольного попапа*/
const openPopup = (popup) => {
  popup.classList.add('popup_opened');

  addEscapeListener();
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
  popupImgPicture.src = src;
  popupImgPicture.alt = name;
  popupImgText.textContent = name;
  openPopup(popupImg);
};

editProfileButton.addEventListener('click', openPopupProfile);
addCardButton.addEventListener('click', openPopupAddCard);

//блокирование кнопки сохранить по имени формы
/*const disableButtonByForm = (form) => {
  const button = form.querySelector(validationConfig.submitButtonSelector);
  disableButton(button, validationConfig.inactiveButtonClass);
};*/

const savePopupProfile = (event) => {
  event.preventDefault();
  currentName.textContent = popupProfileName.value;
  currentDescriprion.textContent = popupProfileDescription.value;

  closePopup(popupProfile);
};

const createCard = (item) => {
  const card = new Card(item, cardTemplate);
  const cardElement = card.createCard();

  return cardElement;
};

formEditProfile.addEventListener('submit', savePopupProfile);

const createNewCard = (event) => {
  event.preventDefault();
  //const newCard = createCard(popupCardNamePlace.value, popupCardUrlPlace.value);

  const newCard = createCard({
    name: popupCardNamePlace.value,
    link: popupCardUrlPlace.value,
  });

  formAddCard.reset();

  cardsContainer.prepend(newCard);

  closePopup(popupCard);
};

formAddCard.addEventListener('submit', createNewCard);

initialCards.forEach((item) => {
  const newCard = createCard(item);
  cardsContainer.append(newCard);
});

/* Проверка наличия открытых окон и закрытие каждого*/
const checkAndCloseOpenedPopup = () => {
  document.querySelectorAll('.popup_opened').forEach(closePopup); //Временный коммент чтобы не забыть прием. было вот так document.querySelectorAll('.popup_opened').forEach((popupOpened) => {     closePopup(popupOpened); })
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    const validator = new FormValidator(form, config);
    validator.enableValidation();
  });
};
enableValidation(validationConfig);
