export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._addEscapeListener();
    this._popupElement.classList.add('popup_opened');
  }
  close() {
    this._popupElement.classList.remove('popup_opened');
    this._removeEscapeListener();
  }
  _handleEscClose = (evt) => {
    //закрытие по Esc
    const keyName = evt.key;

    if (keyName === 'Escape') {
      this.close();
    }
  };

  _addEscapeListener = () => {
    window.addEventListener('keydown', this._handleEscClose);
  };
  _removeEscapeListener = () => {
    window.removeEventListener('keydown', this._handleEscClose);
  };

  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      //Всплытие события и обработка двух действий в родительском объекте

      if (
        evt.target === evt.currentTarget ||
        evt.target.classList.contains('popup__close-button')
      ) {
        this.close();
      }
    });
  }
}
