export default class UserInfo {
  constructor(data) {
    this._userNameSelector = data.userName;

    this._userDescriptionSelector = data.userDescription;
    this._userAvatarSelector = data.userAvatar;

    this._currentUserInfo = {};
    this._userName = document.querySelector(this._userNameSelector);
    this._userDescription = document.querySelector(
      this._userDescriptionSelector
    );
    this._userAvatar = document.querySelector(this._userAvatarSelector);
    this._UserId = null;
  }

  getUserInfo() {
    this._currentUserInfo.name = this._userName.textContent;
    this._currentUserInfo.description = this._userDescription.textContent;

    return this._currentUserInfo;
  }

  setUserInfo(objResponse) {
    this._userName.textContent = objResponse.name;
    this._userDescription.textContent = objResponse.about;
    this._setUserId(objResponse._id);
    //console.log(`id=${data._id}`);
    this.setAvatarPic(objResponse.avatar);
  }
  getUserId = () => this._UserId;
  _setUserId = (id) => (this._UserId = id);
  setAvatarPic(avatar) {
    this._userAvatar.style.backgroundImage = `url(${avatar})`;
    //https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg//ссылка для отката на старую аватарку
    //https://klike.net/uploads/posts/2019-03/1551514046_26.jpg
  }
}
