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

/*Функция отрисовки карточки и подписки на события*/
/*const createCard = (name, src) => {
  const newCard = cardTemplate.cloneNode(true); // создана функция _getTemplate
  const cardTitle = newCard.querySelector('.card__title'); //+
  cardTitle.textContent = name;

  const cardImg = newCard.querySelector('.card__img'); //+
  cardImg.setAttribute('src', src);
  cardImg.setAttribute('alt', name);

  cardImg.addEventListener('click', () => openPopupImg(src, name));

  const removeCardButton = newCard.querySelector('.card__trash-button');
  removeCardButton.addEventListener('click', () => removeCardBtnClick(newCard));

  const likeCardButton = newCard.querySelector('.card__like');
  likeCardButton.addEventListener('click', () => likeBtnClick(likeCardButton));

  return newCard;
};*/

/*Функция удаления карточки*/
/*const removeCardBtnClick = (card) => {
  card.remove();
};*/
/*Функция установки лайка на карточке*/
/*const likeBtnClick = (buttonLike) => {
  buttonLike.classList.toggle('card__like_active');
};*/

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
