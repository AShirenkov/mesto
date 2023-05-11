(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._id=e._id,this._ownerId=e.owner._id,this._userId=r,this._arrLikes=e.likes,this._isliked=null,this._templateSelector=n,this._cardTitle=null,this._cardImg=null,this._removeCardButton=null,this._likeCardButton=null,this._likeCardCount=null,this._handleCardClick=o,this._handleCardRemove=i,this._handleLikeClick=u}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return this._templateSelector.cloneNode(!0)}},{key:"_toggleLike",value:function(){this._likeCardButton.classList.toggle("card__like_active")}},{key:"_toggleRemoveButton",value:function(){this._removeCardButton.classList.toggle("card__trash-button_hidden")}},{key:"removeCard",value:function(){this._newCard.remove()}},{key:"_checkLiked",value:function(t){var e=this;this._isliked=Boolean(t.find((function(t){return t._id===e._userId}))),this._likeCardCount.textContent=t.length}},{key:"_isOwner",value:function(){return this._userId===this._ownerId}},{key:"_setEventListeners",value:function(t){var e=this;this._cardImg.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),t?this._removeCardButton.addEventListener("click",(function(){e._handleCardRemove(e)})):this._toggleRemoveButton(),this._likeCardButton.addEventListener("click",(function(){e._handleLikeClick(e),e._toggleLike()}))}},{key:"createCard",value:function(){return this._newCard=this._getTemplate(),this._cardTitle=this._newCard.querySelector(".card__title"),this._cardTitle.textContent=this._name,this._cardImg=this._newCard.querySelector(".card__img"),this._removeCardButton=this._newCard.querySelector(".card__trash-button"),this._likeCardButton=this._newCard.querySelector(".card__like"),this._likeCardCount=this._newCard.querySelector(".card__like-count"),this._cardImg.src=this._link,this._cardImg.alt=this._name,this._setEventListeners(this._isOwner()),this._checkLiked(this._arrLikes),this._isliked&&this._toggleLike(),this._newCard}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this._renderedItems=t,this.clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function s(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var a=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=s(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupSelector=e,this._popupElement=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){window.addEventListener("keydown",this._handleEscClose),this._popupElement.classList.add("popup_opened")}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("click",(function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},p.apply(this,arguments)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function _(t,e,r){return(e=d(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return h(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),_(h(r=i.call(this,t)),"_getInputValues",(function(){return r._formValues={},r._inputList.forEach((function(t){return r._formValues[t.name]=t.value})),r._formValues})),_(h(r),"toggleSubmitButtonDescription",(function(){"Сохранение..."===r._submitButton.textContent?(r._submitButton.textContent=r._submitButtonDescription,console.log(r._submitButton.textContent)):(r._submitButton.textContent="Сохранение...",console.log(r._submitButton.textContent))})),r._handleFormSubmit=e,r._form=r._popupElement.querySelector(".popup__edit-form"),r._inputList=r._form.querySelectorAll(".popup__input-text"),r._submitButton=r._form.querySelector(".popup__save-button"),r._submitButtonDescription=r._submitButton.textContent,r}return e=u,(r=[{key:"close",value:function(){p(m(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;p(m(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,C(n.key),n)}}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},k.apply(this,arguments)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function C(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(o){var r=E(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return w(t)}(this,t)});function u(t,e){var r,n,o,c,s;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=w(n=i.call(this,t)),s=function(t){k((r=w(n),E(u.prototype)),"open",r).call(r),n._objForSubmit=t},(c=C(c="open"))in o?Object.defineProperty(o,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[c]=s,n._handleFormSubmit=e,n._form=n._popupElement.querySelector(".popup__edit-form"),n._inputList=n._form.querySelectorAll(".popup__input-text"),n}return e=u,(r=[{key:"setEventListeners",value:function(){var t=this;k(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._objForSubmit),t.close()}))}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function L(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},I.apply(this,arguments)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}function T(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(n){var o=B(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return L(t)}(this,t)});function i(t){var e,r,n,u,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=L(r=o.call(this,t)),c=function(t,n){r._popupImage.src=t,r._popupImage.alt=n,r._popupImageDescr.textContent=n,I((e=L(r),B(i.prototype)),"open",e).call(e)},(u=T(u="open"))in n?Object.defineProperty(n,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[u]=c,r._popupImage=r._popupElement.querySelector(".popup__card-img"),r._popupImageDescr=r._popupElement.querySelector(".popup__text-img"),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(a);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,q(n.key),n)}}function D(t,e,r){return(e=q(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function q(t){var e=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===U(e)?e:String(e)}var A=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,"getUserId",(function(){return r._UserId})),D(this,"_setUserId",(function(t){return r._UserId=t})),this._userNameSelector=e.userName,this._userDescriptionSelector=e.userDescription,this._userAvatarSelector=e.userAvatar,this._currentUserInfo={},this._userName=document.querySelector(this._userNameSelector),this._userDescription=document.querySelector(this._userDescriptionSelector),this._userAvatar=document.querySelector(this._userAvatarSelector),this._UserId=null}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._currentUserInfo.name=this._userName.textContent,this._currentUserInfo.description=this._userDescription.textContent,this._currentUserInfo}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userDescription.textContent=t.about,this._setUserId(t._id),this.setAvatarPic(t.avatar)}},{key:"setAvatarPic",value:function(t){this._userAvatar.style.backgroundImage="url(".concat(t,")")}}])&&R(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===F(o)?o:String(o)),n)}var o}var V=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=e,this._config=r,this._inputSelector=r.inputSelector,this._submitButtonSelector=r.submitButtonSelector,this._errorClassTemplate=r.errorClassTemplate,this._inputErrorClass=r.inputErrorClass,this._inactiveButtonClass=r.inactiveButtonClass,this._inputTextClassError=r.inputTextClassError,this._inputList=null,this._submitButton=null}var e,r;return e=t,(r=[{key:"_hideInputError",value:function(t){t.textContent="",t.classList.remove(this._inputErrorClass)}},{key:"_showInputError",value:function(t,e){e.textContent=t,e.classList.add(this._inputErrorClass)}},{key:"_removeInputTextErrorClass",value:function(t){t.classList.remove(this._inputTextClassError)}},{key:"_addInputTextErrorClass",value:function(t){t.classList.add(this._inputTextClassError)}},{key:"_checkInputValidity",value:function(t){var e=document.querySelector("".concat(this._errorClassTemplate).concat(t.name));t.validity.valid?(this._hideInputError(e),this._removeInputTextErrorClass(t)):(this._showInputError(t.validationMessage,e),this._addInputTextErrorClass(t))}},{key:"_enableButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._inputList=this._form.querySelectorAll(this._inputSelector),this._submitButton=this._form.querySelector(this._submitButtonSelector),this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){var r=document.querySelector("".concat(t._errorClassTemplate).concat(e.name));t._hideInputError(r),t._removeInputTextErrorClass(e)}))}}])&&N(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===M(o)?o:String(o)),n)}var o}var J=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=r,this._headers=n}var e,r;return e=t,(r=[{key:"_resFromServer",value:function(t){return t.ok?t.json():Promise.reject("Ошибка сервера: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._resFromServer)}},{key:"getMyUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._resFromServer)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._resFromServer)}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._resFromServer)}},{key:"sendNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this._resFromServer)}},{key:"removeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._resFromServer)}},{key:"removeLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._resFromServer)}},{key:"setLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._resFromServer)}}])&&H(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),z=document.querySelector(".profile__edit-button"),G=document.querySelector(".profile__avatar-button"),K=document.forms.formEditProfile,Q=document.forms.formEditAvatar,W=K.elements.nameProfile,X=K.elements.descriptionProfile,Y=document.forms.formAddCard,Z=document.querySelector(".profile__card-add-button"),$=document.querySelector("#cardTemplate").content.querySelector(".card"),tt=new J({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"c0cfe72b-23eb-4653-b6ea-f451b2b55b5c","Content-Type":"application/json"}});Promise.resolve(tt.getMyUser()).then((function(t){ut.setUserInfo(t),ut.setUserId(t._id)})).catch((function(t){console.log(t)})),Promise.resolve(tt.getInitialCards()).then((function(t){it.renderItems(t)})).catch((function(t){console.log(t)})),z.addEventListener("click",(function(){var t=ut.getUserInfo(),e=t.name,r=t.description;W.value=e,X.value=r,rt[K.getAttribute("name")].resetValidation(),st.open()})),G.addEventListener("click",(function(){rt[Q.getAttribute("name")].resetValidation(),at.open()})),Z.addEventListener("click",(function(){ct.open(),rt[Y.getAttribute("name")].resetValidation()}));var et,rt={};et={formSelector:".popup__edit-form",inputSelector:".popup__input-text",errorClassTemplate:".popup__input-text-error_type_",inputErrorClass:"popup__input-text-error_active",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputTextClassError:"popup__input-text_type_error"},Array.from(document.querySelectorAll(et.formSelector)).forEach((function(t){var e=new V(t,et),r=t.getAttribute("name");rt[r]=e,e.enableValidation()}));var nt=new x(".popup_type_img");nt.setEventListeners();var ot=function(t){var e=ut.getUserId(),n=new r(t,e,$,nt.open,lt.open,ft).createCard();it.addItem(n)},it=new i({renderer:function(t){ot(t)}},".cards"),ut=new A({userName:".profile__name",userDescription:".profile__descr",userAvatar:".profile__avatar-button"}),ct=new v(".popup_type_card",(function(t){ct.toggleSubmitButtonDescription(),tt.sendNewCard(t).then(ot).catch((function(t){console.log(t)})).finally((function(){ct.toggleSubmitButtonDescription()}))}));ct.setEventListeners();var st=new v(".popup_type_profile",(function(t){var e={name:t.nameProfile,about:t.descriptionProfile};st.toggleSubmitButtonDescription(),tt.setUserInfo(e).then((function(t){ut.setUserInfo(t)})).catch((function(t){console.log(t)})).finally((function(){st.toggleSubmitButtonDescription()}))}));st.setEventListeners();var at=new v(".popup_type_avatar",(function(t){var e={avatar:t.linkAvatar};at.toggleSubmitButtonDescription(),tt.setUserAvatar(e).then((function(t){ut.setUserInfo(t)})).catch((function(t){console.log(t)})).finally((function(){at.toggleSubmitButtonDescription()}))}));at.setEventListeners();var lt=new P(".popup_type_remove-card",(function(t){tt.removeCard(t._id).then(t.removeCard()).catch((function(t){console.log(t)}))}));lt.setEventListeners();var ft=function(t){t._isliked?tt.removeLike(t._id).then((function(e){t._checkLiked(e.likes)})).catch((function(t){console.log(t)})):tt.setLike(t._id).then((function(e){t._checkLiked(e.likes)})).catch((function(t){console.log(t)}))}})();