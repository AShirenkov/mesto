/*Функции закрытия попапа по нажатию кнопки крестик*/

const escapeButtonPressed = (evt) => {
  const keyName = evt.key;

  if (keyName === 'Escape') {
    checkAndCloseOpenedPopup();
  }
};
/*Подписка на событие нажатия Escape*/
const addEscapeListener = () => {
  document.addEventListener('keydown', escapeButtonPressed);
};
const removeEscapeListener = () => {
  document.removeEventListener('keydown', escapeButtonPressed);
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
const disableButtonByForm = (form) => {
  const button = form.querySelector(validationConfig.submitButtonSelector);
  disableButton(button, validationConfig.inactiveButtonClass);
};

const savePopupProfile = (event) => {
  event.preventDefault();
  currentName.textContent = popupProfileName.value;
  currentDescriprion.textContent = popupProfileDescription.value;

  disableButtonByForm(formEditProfile); //тут тоже добавил вызов, иначе поведение кнопки при первом старте и повторном вызове отличаются
  closePopup(popupProfile);
};

formEditProfile.addEventListener('submit', savePopupProfile);

const createNewCard = (event) => {
  event.preventDefault();
  const newCard = createCard(popupCardNamePlace.value, popupCardUrlPlace.value);

  formAddCard.reset();

  cardsContainer.prepend(newCard);
  disableButtonByForm(formAddCard);
  closePopup(popupCard);
};

formAddCard.addEventListener('submit', createNewCard);

class Card {
  constructor(dataCard, templateSelector) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._templateSelector = templateSelector;
    this._cardTitle = null;
    this._cardImg = null;
    this._removeCardButton = null;
    this._likeCardButton = null;
  }

  _getTemplate() {
    const cardElement = this._templateSelector.cloneNode(true);

    return cardElement;
  }
  _likeBtnClick() {
    this._likeCardButton.classList.toggle('card__like_active');
  }
  _removeCardBtnClick() {
    this._newCard.remove();
  }
  _openPopupImg() {
    popupImgPicture.src = this._link;
    console.log(this._link);
    popupImgPicture.alt = this._name;
    popupImgText.textContent = this._name;
    popupImg.classList.add('popup_opened');
  }

  _setEventListeners() {
    this._cardImg.addEventListener('click', () => {
      this._openPopupImg();
    });

    this._removeCardButton = this._newCard.querySelector('.card__trash-button');
    this._removeCardButton.addEventListener('click', () => {
      this._removeCardBtnClick();
    });

    this._likeCardButton = this._newCard.querySelector('.card__like');
    this._likeCardButton.addEventListener('click', () => {
      this._likeBtnClick();
    });

    /*popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });*/
  }

  createCard() {
    this._newCard = this._getTemplate();

    this._cardTitle = this._newCard.querySelector('.card__title'); //+
    this._cardTitle.textContent = this._name;

    this._cardImg = this._newCard.querySelector('.card__img');
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._setEventListeners();
    return this._newCard;
  }
}

initialCards.forEach((item) => {
  //const newCard = createCard(card.name, card.link);
  const card = new Card(item, cardTemplate);
  const newCard = card.createCard();
  cardsContainer.append(newCard);
});

/* Проверка наличия открытых окон и закрытие каждого*/
const checkAndCloseOpenedPopup = () => {
  document.querySelectorAll('.popup_opened').forEach((popupOpened) => {
    closePopup(popupOpened);
  });
};
//Выполняем валидацию форм
const validationConfig = {
  formSelector: '.popup__edit-form',
  inputSelector: '.popup__input-text',
  errorClassTemplate: '.popup__input-text-error_type_',
  inputErrorClass: 'popup__input-text-error_active',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputTextClassError: 'popup__input-text_type_error',
};

enableValidation(validationConfig);
