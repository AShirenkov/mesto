import Popup from './Popup.js';
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._form = this._popupElement.querySelector('.popup__edit-form');
    this._inputList = this._form.querySelectorAll('.popup__input-text');
  }

  open = (obj) => {
    super.open();
    this._objForSubmit = obj;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._objForSubmit);
      this.close();

      //this._form.reset();
    });
  }
}
