import Card from './Card.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import { FormValidator } from './FormValidator.js';
import {
  validationConfig,
  initialCards,
  editProfileButton,
  addCardButton,
  cardTemplate,
  cardsContainer,
  cardsSelector,
  popupCard,
  popupCardSelector,
  popupProfile,
  popupProfileName,
  popupProfileDescription,
  popupUserSelector,
  currentName,
  currentDescriprion,
  popupCardNamePlace,
  popupCardUrlPlace,
  popupImgPicture,
  popupImgText,
  popupImg,
  popupImgSelector,
  formAddCard,
  formEditProfile,
} from './constants.js';

/*Функция открытия окна с параметрами пользователя*/
const openPopupProfile = () => {
  const { name, description } = user.getUserInfo();

  popupProfileName.value = name;
  popupProfileDescription.value = description;

  formValidators[formEditProfile.getAttribute('name')].resetValidation();

  popupUserInfo.open();
};

/*Функция открытия окна добавления новой карточки*/
const openPopupAddCard = () => {
  popupAddCard.open();
  formValidators[formAddCard.getAttribute('name')].resetValidation();
};

editProfileButton.addEventListener('click', openPopupProfile); //слушатели элементов на странице
addCardButton.addEventListener('click', openPopupAddCard); //слушатели элементов на странице

const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(validationConfig);

//Создаем экземпляр класса для окна карточки
const popupCardImage = new PopupWithImage(popupImgSelector);
popupCardImage.setEventListeners();

//Заполняем страницу предустановленными карточками
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplate, popupCardImage.open);
      const cardElement = card.createCard();

      cardList.addItem(cardElement);
    },
  },
  cardsSelector
);

cardList.renderItems();

//Создаем экземпляр класса для записи/чтения данных пользователя
const user = new UserInfo({
  userName: '.profile__name',
  userDescription: '.profile__descr',
});

//callBack функция для попапа добавления новой карточки
const createNewCard = (formValues) => {
  const card = new Card(
    { name: formValues['namePlace'], link: formValues['urlPlace'] },
    cardTemplate,
    popupCardImage.open
  );

  const cardElement = card.createCard();
  cardList.addItem(cardElement);
};
//Создаем экземпляр класса для добавления новых карточек
const popupAddCard = new PopupWithForm(popupCardSelector, createNewCard);
popupAddCard.setEventListeners();

//callBack функция для попапа редактирования профиля
const setUserInfo = (formValues) => {
  user.setUserInfo(formValues['nameProfile'], formValues['descriptionProfile']);
};

//Создаем экземпляр класса для редактирвоания профиля пользователя
const popupUserInfo = new PopupWithForm(popupUserSelector, setUserInfo);
popupUserInfo.setEventListeners();
