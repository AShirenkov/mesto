import Popup from './Popup.js';
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._form = this._popupElement.querySelector('.popup__edit-form');
    this._inputList = this._form.querySelectorAll('.popup__input-text');

    this._submitButton = this._form.querySelector('.popup__save-button');
    this._submitButtonDescription = this._submitButton.textContent;
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
    });
  }
  toggleSubmitButtonDescription = () => {
    if (this._submitButton.textContent === 'Удаление...') {
      this._submitButton.textContent = this._submitButtonDescription;
    } else {
      this._submitButton.textContent = 'Удаление...';
    }
  };
}
