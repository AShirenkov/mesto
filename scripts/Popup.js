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
  popupImgPicture,
  popupImgText,
  popupImg,
  formAddCard,
  formEditProfile,
} from './constants.js';

export default class Popup {
  constructor(popupSelector) {
    // this._name = dataCard.name;
    // this._link = dataCard.link;
    this._popupSelector = popupSelector;
    // this._cardTitle = null;
    // this._cardImg = null;
    // this._removeCardButton = null;
    // this._likeCardButton = null;
    // this._openPopupImg = openPopupImg;
  }

  open() {}
  close() {}
  _handleEscClose() {
    //закрытие по Esc
  }

  setEventListeners() {
    this._cardImg.addEventListener('click', () => {
      this._openPopupImg(this._link, this._name);
    });

    this._removeCardButton.addEventListener('click', () => {
      this._removeCard();
    });

    this._likeCardButton.addEventListener('click', () => {
      this._toggleLike();
    });
  }

  /*

  _getTemplate() {
    const cardElement = this._templateSelector.cloneNode(true);

    return cardElement;
  }
  _toggleLike() {
    this._likeCardButton.classList.toggle('card__like_active');
  }
  _removeCard() {
    this._newCard.remove();
  }

  _setEventListeners() {
    this._cardImg.addEventListener('click', () => {
      this._openPopupImg(this._link, this._name);
    });

    this._removeCardButton.addEventListener('click', () => {
      this._removeCard();
    });

    this._likeCardButton.addEventListener('click', () => {
      this._toggleLike();
    });
  }

  createCard() {
    this._newCard = this._getTemplate();

    this._cardTitle = this._newCard.querySelector('.card__title'); //+
    this._cardTitle.textContent = this._name;

    this._cardImg = this._newCard.querySelector('.card__img');
    this._removeCardButton = this._newCard.querySelector('.card__trash-button');
    this._likeCardButton = this._newCard.querySelector('.card__like');

    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._setEventListeners();
    return this._newCard;
  }*/
}
