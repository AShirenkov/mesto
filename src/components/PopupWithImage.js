import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = (src, name) => {
    this._popupElement.querySelector('.popup__card-img').src = src;
    this._popupElement.querySelector('.popup__card-img').alt = name;
    this._popupElement.querySelector('.popup__text-img').textContent = name;
    super.open();
  };
}
