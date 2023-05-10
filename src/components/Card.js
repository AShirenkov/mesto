export default class Card {
  constructor(
    dataCard,
    userId,
    templateSelector,
    handleCardClick,
    handleCardRemove
  ) {
    this._name = dataCard.name;
    this._link = dataCard.link;

    this._id = dataCard._id;

    this._ownerId = dataCard.owner._id;

    this._userId = userId;

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

  _toggleRemoveButton() {
    this._removeCardButton.classList.toggle('card__trash-button_hidden');
  }
  removeCard() {
    this._newCard.remove();
  }
  _isOwner() {
    console.log(`владелец:${this._ownerId}`);
    console.log(`я:${this._userId}`);

    return this._userId === this._ownerId;
  }
  _setEventListeners(isOwner) {
    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    if (isOwner) {
      console.log('моя');
      this._removeCardButton.addEventListener('click', () => {
        //this._removeCard(); //заменяем на хендлер функции открытия попапа
        this._handleCardRemove(this);
      });
    } else {
      this._toggleRemoveButton();
    }

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
    this._setEventListeners(this._isOwner());
    return this._newCard;
  }
}
