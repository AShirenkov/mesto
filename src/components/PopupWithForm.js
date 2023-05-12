import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._form = this._popupElement.querySelector('.popup__edit-form');
    this._inputList = this._form.querySelectorAll('.popup__input-text');

    this._submitButton = this._form.querySelector('.popup__save-button');

    this._submitButtonDescription = this._submitButton.textContent;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  _getInputValues = () => {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  };

  toggleSubmitButtonDescription = () => {
    if (this._submitButton.textContent === 'Сохранение...') {
      this._submitButton.textContent = this._submitButtonDescription;
    } else {
      this._submitButton.textContent = 'Сохранение...';
    }
  };
}
