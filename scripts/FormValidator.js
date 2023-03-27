export class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._config = config;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._errorClassTemplate = config.errorClassTemplate;
    this._inputErrorClass = config.inputErrorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputTextClassError = config.inputTextClassError;
    this._inputList = null;
    this._submitButton = null;
  }
  _hideInputError(errorTextElement) {
    errorTextElement.textContent = '';
    errorTextElement.classList.remove(this._inputErrorClass);
  }
  _showInputError(validationMessage, errorTextElement) {
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(this._inputErrorClass);
  }

  _removeInputTextErrorClass(input) {
    input.classList.remove(this._inputTextClassError);
  }
  _addInputTextErrorClass(input) {
    input.classList.add(this._inputTextClassError);
  }

  _checkInputValidity(input) {
    const errorTextElement = document.querySelector(
      `${this._errorClassTemplate}${input.name}`
    );

    if (input.validity.valid) {
      this._hideInputError(errorTextElement);
      this._removeInputTextErrorClass(input);
    } else {
      this._showInputError(input.validationMessage, errorTextElement);
      this._addInputTextErrorClass(input);
    }
  }

  _enableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }
  _disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _hasInvalidInput() {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }

  _toggleButtonState() {
    if (!this._hasInvalidInput()) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._disableButton();
    });

    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._setEventListeners();
  }
}
