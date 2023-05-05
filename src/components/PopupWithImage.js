import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__card-img');
    this._popupImageDescr =
      this._popupElement.querySelector('.popup__text-img');
  }

  open = (src, name) => {
    this._popupImage.src = src;
    this._popupImage.alt = name;
    this._popupImageDescr.textContent = name;
    super.open();
  };
}
