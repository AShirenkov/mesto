/*import {
  popupImgPicture,
  popupImgText,
  popupImg,
  popupCard,
} from './constants.js';*/

export class Card {
  constructor(dataCard, templateSelector, openPopupImg) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._templateSelector = templateSelector;
    this._cardTitle = null;
    this._cardImg = null;
    this._removeCardButton = null;
    this._likeCardButton = null;
    this._openPopupImg = openPopupImg;
  }

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
  /*_openPopupImg() {
    popupImgPicture.src = this._link;
    popupImgPicture.alt = this._name;
    popupImgText.textContent = this._name;
    // popupImg.classList.add('popup_opened');
    this._openPopup(popupImg);
  }*/

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
  }
}
