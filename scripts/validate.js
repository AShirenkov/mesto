/*const enableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
};
const disableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
};

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => !input.validity.valid);
};
const toggleButtonState = (submitButton, inactiveButtonClass, inputList) => {
  if (!hasInvalidInput(inputList)) {
    enableButton(submitButton, inactiveButtonClass);
  } else {
    disableButton(submitButton, inactiveButtonClass);
  }
};*/
/*
const showInputError = (
  errorTextElement,
  validationMessage,
  inputErrorClass
) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(inputErrorClass);
};

const hideInputError = (errorTextElement, inputErrorClass) => {
  errorTextElement.textContent = '';
  errorTextElement.classList.remove(inputErrorClass);
};

const addInputTextErrorClass = (input, inputTextClassError) => {
  input.classList.add(inputTextClassError);
};

const removeInputTextErrorClass = (input, inputTextClassError) => {
  input.classList.remove(inputTextClassError);
};*/
/*
const checkInputValidity = (
  input,
  errorClassTemplate,
  inputErrorClass,
  inputTextClassError
) => {
  const errorTextElement = document.querySelector(
    `${errorClassTemplate}${input.name}`
  );

  if (input.validity.valid) {
    hideInputError(errorTextElement, inputErrorClass);
    removeInputTextErrorClass(input, inputTextClassError);
  } else {
    showInputError(errorTextElement, input.validationMessage, inputErrorClass);
    addInputTextErrorClass(input, inputTextClassError);
  }
};
*/
/*const setEventListeners = (
  form,
  inputList,
  errorClassTemplate,
  inputErrorClass,
  submitButton,
  inactiveButtonClass,
  inputTextClassError
) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  toggleButtonState(submitButton, inactiveButtonClass, inputList);
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(
        input,
        errorClassTemplate,
        inputErrorClass,
        inputTextClassError
      );
      toggleButtonState(submitButton, inactiveButtonClass, inputList);
    });
  });
};*/

/*const getInputListFromForm = (form, config) => {
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);
  setEventListeners(
    form,
    inputList,
    config.errorClassTemplate,
    config.inputErrorClass,
    submitButton,
    config.inactiveButtonClass,
    config.inputTextClassError
  );
};*/

/*
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    getInputListFromForm(form, config);
  });
};

class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._config = config;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._errorClassTemplate = config.errorClassTemplate;
    this._inputErrorClass = config.inputErrorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputTextClassError = config.inputTextClassError;
    this._inputList=null;
    this._submitButton = null;
    this._inputItem=null;
    this._errorTextElement=null;
  }
  _hideInputError(){
    this._errorTextElement.textContent = '';
    this._errorTextElement.classList.remove(this._inputErrorClass);

  }
  _showInputError(){
    this._errorTextElement.textContent = this._inputItem.validationMessage;
    this._errorTextElement.classList.add(this._inputErrorClass);

  }


  _removeInputTextErrorClass(){
    this._inputItem.classList.remove(this._inputTextClassError);
  }
  _addInputTextErrorClass(){
    this._inputItem.classList.add(this._inputTextClassError);
  }

  _checkInputValidity() {

    this._errorTextElement = document.querySelector(
      `${this._errorClassTemplate}${this._inputItem.name}`
    );

    if (this._inputItem.validity.valid) {
      this._hideInputError();//errorTextElement, this.inputErrorClass);
      this._removeInputTextErrorClass();//input, this._inputTextClassError);
    } else {
      this._showInputError();//errorTextElement, input.validationMessage, inputErrorClass);
      this._addInputTextErrorClass();//input, inputTextClassError);
    }
  }

  _enableButton  () {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  };
  _disableButton () {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  };

  _hasInvalidInput () {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  };

  _toggleButtonState (){
    if (!this._hasInvalidInput()) {
      this._enableButton());
    } else {
      this._disableButton();
    }
  };

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._toggleButtonState();
    this._inputList.forEach((input) => {
      this._inputItem=input;
      this._inputItem.addEventListener('input', () => {
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  }
  _getInputListFromForm() {
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._setEventListeners();
  }
}
*/
