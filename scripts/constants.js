const editProfileButton = document.querySelector('.profile__edit-button');
const currentName = document.querySelector('.profile__name');
const currentDescriprion = document.querySelector('.profile__descr');

const popupProfile = document.querySelector('.popup_type_profile');

const formEditProfile = document.forms.formEditProfile;
const popupProfileName = formEditProfile.elements.nameProfile;
const popupProfileDescription = formEditProfile.elements.descriptionProfile;

const popupProfileSaveButton = popupProfile.querySelector(
  '.popup__save-button'
);

const popupCard = document.querySelector('.popup_type_card');
const formAddCard = document.forms.formAddCard;

const popupCardNamePlace = formAddCard.elements.namePlace;
const popupCardUrlPlace = formAddCard.elements.urlPlace;

const addCardButton = document.querySelector('.profile__card-add-button');

const cardsContainer = document.querySelector('.cards');

const popupImg = document.querySelector('.popup_type_img');
const popupImgPicture = popupImg.querySelector('.popup__card-img');
const popupImgText = popupImg.querySelector('.popup__text-img');

const cardTemplate = document
  .querySelector('#cardTemplate')
  .content.querySelector('.card');
