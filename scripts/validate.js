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

const addInputTextErrorClass = (input, inputTextClassError) => {
  input.classList.add(inputTextClassError);
};

const removeInputTextErrorClass = (input, inputTextClassError) => {
  input.classList.remove(inputTextClassError);
};

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

const setEventListeners = (
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
    config.inactiveButtonClass,
    config.inputTextClassError
  );
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    getInputListFromForm(form, config);
  });
};
