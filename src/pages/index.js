import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import Api from '../components/Api.js';
import {
  validationConfig,
  //initialCards,
  editProfileButton,
  addCardButton,
  cardTemplate,
  cardsSelector,
  popupCardSelector,
  popupProfileName,
  popupProfileDescription,
  popupUserSelector,
  popupImgSelector,
  formAddCard,
  formEditProfile,
  popupRemoveCardSelector,
} from '../utils/constants.js';
import './index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'c0cfe72b-23eb-4653-b6ea-f451b2b55b5c',
    'Content-Type': 'application/json',
  },
});

//считываем список карточек с сервера
//const initialCards = null;
Promise.resolve(api.getMyUser())
  .then((values) => {
    //initialCards = values;
    console.log(values);
    //cardList.renderItems(values);
    user.setUserInfo(values['name'], values['about']);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.resolve(api.getInitialCards())
  .then((values) => {
    //initialCards = values;
    //console.log(values);
    cardList.renderItems(values);
  })
  .catch((err) => {
    console.log(err);
  });

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

//Создаем экземпляр класса для окна подтверждения удаления карточки
//const popupConfirm = new PopupWithConfirm(popupRemoveCardSelector, setUserInfo);
//popupConfirm.setEventListeners();

//callBack функция для попапа добавления новой карточки
const createNewCard = (formValues) => {
  const card = new Card(formValues, cardTemplate, popupCardImage.open);

  const cardElement = card.createCard();
  cardList.addItem(cardElement);
};
//Заполняем страницу предустановленными карточками
const cardList = new Section(
  {
    renderer: (item) => {
      createNewCard(item);
    },
  },

  cardsSelector
);

//cardList.renderItems();

//Создаем экземпляр класса для записи/чтения данных пользователя
const user = new UserInfo({
  userName: '.profile__name',
  userDescription: '.profile__descr',
});

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
