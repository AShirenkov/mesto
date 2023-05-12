export const popupProfileOpenButton = document.querySelector(
  '.profile__edit-button'
);
export const popupAvatarOpenButton = document.querySelector(
  '.profile__avatar-button'
);
export const popupUserSelector = '.popup_type_profile';
export const popupAvatarSelector = '.popup_type_avatar';

export const formEditProfile = document.forms.formEditProfile;
export const formEditAvatar = document.forms.formEditAvatar;
export const popupProfileName = formEditProfile.elements.nameProfile;
export const popupProfileDescription =
  formEditProfile.elements.descriptionProfile;
export const formAddCard = document.forms.formAddCard;
export const popupCardSelector = '.popup_type_card';
export const addCardButton = document.querySelector(
  '.profile__card-add-button'
);
export const popupRemoveCardSelector = '.popup_type_remove-card';

export const cardsSelector = '.cards';
export const popupImgSelector = '.popup_type_img';
export const cardTemplate = document
  .querySelector('#cardTemplate')
  .content.querySelector('.card');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

export const validationConfig = {
  formSelector: '.popup__edit-form',
  inputSelector: '.popup__input-text',
  errorClassTemplate: '.popup__input-text-error_type_',
  inputErrorClass: 'popup__input-text-error_active',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputTextClassError: 'popup__input-text_type_error',
};
