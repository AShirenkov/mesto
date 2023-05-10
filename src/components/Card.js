export default class Card {
  constructor(dataCard, templateSelector, handleCardClick, handleCardRemove) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._templateSelector = templateSelector;
    this._cardTitle = null;
    this._cardImg = null;
    this._removeCardButton = null;
    this._likeCardButton = null;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
  }

  _getTemplate() {
    const cardElement = this._templateSelector.cloneNode(true);

    return cardElement;
  }
  _toggleLike() {
    this._likeCardButton.classList.toggle('card__like_active');
  }
  removeCard() {
    this._newCard.remove();
  }

  _setEventListeners() {
    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    this._removeCardButton.addEventListener('click', () => {
      //this._removeCard(); //заменяем на хендлер функции открытия попапа
      this._handleCardRemove(this._newCard);
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
