/*
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const hasInvalidInput=(inputList) => {

  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  })
};

const toggleButtonState =(inputList , buttonElement)=>{
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('button_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('button_inactive');
  }
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });


    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));

      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
      });

  });
};

enableValidation();


*/
const enableButton = (submitButton, inactiveButtonClass) => {
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
};

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

const checkInputValidity = (input, errorClassTemplate, inputErrorClass) => {
  const errorTextElement = document.querySelector(
    `${errorClassTemplate}${input.name}`
  );
  console.log(errorTextElement);
  if (input.validity.valid) {
    hideInputError(errorTextElement, inputErrorClass);
    //showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    showInputError(errorTextElement, input.validationMessage, inputErrorClass);
    //hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (
  form,
  inputList,
  errorClassTemplate,
  inputErrorClass,
  submitButton,
  inactiveButtonClass
) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(input, errorClassTemplate, inputErrorClass);
      toggleButtonState(submitButton, inactiveButtonClass, inputList);
    });
  });
};

const getInputListFromForm = (form, config) => {
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);
  setEventListeners(
    form,
    inputList,
    config.errorClassTemplate,
    config.inputErrorClass,
    submitButton,
    config.inactiveButtonClass
  );
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    getInputListFromForm(form, config);
  });
};
