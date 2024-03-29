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
  popupProfileOpenButton,
  popupAvatarOpenButton,
  addCardButton,
  cardTemplate,
  cardsSelector,
  popupCardSelector,
  popupProfileName,
  popupProfileDescription,
  popupUserSelector,
  popupImgSelector,
  popupAvatarSelector,
  formAddCard,
  formEditProfile,
  formEditAvatar,
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
Promise.all([api.getMyUser(), api.getInitialCards()])
  .then((values) => {
    user.setUserInfo(values[0]);

    return Promise.resolve(values[1]);
  })
  .then((values) => {
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
/*Функция открытия окна обновления аватара*/
const openPopupAvatar = () => {
  formValidators[formEditAvatar.getAttribute('name')].resetValidation();

  popupUserAvatar.open();
};
/*Функция открытия окна добавления новой карточки*/
const openPopupAddCard = () => {
  popupAddCard.open();
  formValidators[formAddCard.getAttribute('name')].resetValidation();
};

popupProfileOpenButton.addEventListener('click', openPopupProfile); //слушатели элементов на странице
popupAvatarOpenButton.addEventListener('click', openPopupAvatar); //слушатели элементов на странице
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

// функция для попапа добавления новой карточки
const createCard = (formValues) => {
  const userId = user.getUserId();
  const card = new Card(
    formValues,
    userId,
    cardTemplate,
    popupCardImage.open,
    popupRemoveCard.open,
    handleLikeClick
  );

  const cardElement = card.createCard();
  cardList.addItem(cardElement);
};

//СallBack Функция  для сабмита формы для добавления карточке с запросом на сервер

const handleNewCardServer = (formValues) => {
  popupAddCard.toggleSubmitButtonDescription();
  api
    .sendNewCard(formValues)
    .then((res) => {
      createCard(res);
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.toggleSubmitButtonDescription();
    });
};

//Заполняем страницу предустановленными карточками
const cardList = new Section(
  {
    renderer: (item) => {
      createCard(item);
    },
  },

  cardsSelector
);

//Создаем экземпляр класса для записи/чтения данных пользователя
const user = new UserInfo({
  userName: '.profile__name',
  userDescription: '.profile__descr',
  userAvatar: '.profile__avatar-button',
});

//Создаем экземпляр класса для добавления новых карточек
const popupAddCard = new PopupWithForm(popupCardSelector, handleNewCardServer);
popupAddCard.setEventListeners();

//СallBack функция для сабмита попапа редактирования профиля

const handleSetUserInfo = (formValues) => {
  const objUser = {
    name: formValues['nameProfile'],
    about: formValues['descriptionProfile'],
  };
  popupUserInfo.toggleSubmitButtonDescription();

  api
    .setUserInfo(objUser)
    .then((values) => {
      user.setUserInfo(values);
      popupUserInfo.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupUserInfo.toggleSubmitButtonDescription();
    });
};
//СallBack функция для сабмита попапа смены аватара
const handleSetUserAvatar = (formValues) => {
  const objAvatar = {
    avatar: formValues['linkAvatar'],
  };
  popupUserAvatar.toggleSubmitButtonDescription();
  api
    .setUserAvatar(objAvatar)
    .then((values) => {
      user.setUserInfo(values);
      popupUserAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupUserAvatar.toggleSubmitButtonDescription();
    });
};

//Создаем экземпляр класса для редактирвоания профиля пользователя
const popupUserInfo = new PopupWithForm(popupUserSelector, handleSetUserInfo);
popupUserInfo.setEventListeners();

//Создаем экземпляр класса для редактирвоания аватара пользователя
const popupUserAvatar = new PopupWithForm(
  popupAvatarSelector,
  handleSetUserAvatar
);
popupUserAvatar.setEventListeners();

//СallBack Функция  для сабмита попапа удаления объекта по его ID
const handleRemoveCardServer = (card) => {
  popupRemoveCard.toggleSubmitButtonDescription();
  api
    .removeCard(card._id)
    .then(() => {
      card.removeCard();
      popupRemoveCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupRemoveCard.toggleSubmitButtonDescription();
    });
};

//Создаем экземпляр класса для редактирвоания профиля пользователя
const popupRemoveCard = new PopupWithConfirm(
  popupRemoveCardSelector,
  handleRemoveCardServer
);
popupRemoveCard.setEventListeners();

//СallBack Функция  для обработки клика по лайку карточки
const handleLikeClick = (card) => {
  if (card._isliked) {
    api
      .removeLike(card._id)
      .then((values) => {
        card._checkLiked(values.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .setLike(card._id)
      .then((values) => {
        card._checkLiked(values.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
