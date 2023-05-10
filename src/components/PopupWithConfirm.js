import Popup from './Popup.js';
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._form = this._popupElement.querySelector('.popup__edit-form');
    this._inputList = this._form.querySelectorAll('.popup__input-text');
  }

  open(handler) {
    super.open();
    this._handleFormSubmit = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      this.close();

      //this._form.reset();
    });
  }
}
