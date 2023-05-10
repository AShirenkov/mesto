export default class UserInfo {
  constructor(data) {
    this._userNameSelector = data.userName;

    this._userDescriptionSelector = data.userDescription;
    this._currentUserInfo = {};
    this._userName = document.querySelector(this._userNameSelector);
    this._userDescription = document.querySelector(
      this._userDescriptionSelector
    );

    this._UserId = null;
  }

  getUserInfo() {
    this._currentUserInfo.name = this._userName.textContent;
    this._currentUserInfo.description = this._userDescription.textContent;

    return this._currentUserInfo;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userDescription.textContent = data.about;
    this._setUserId(data._id);
    //console.log(`id=${data._id}`);
    this.setAvatarPic(data.avatar);
  }
  getUserId = () => this._UserId;
  _setUserId = (id) => (this._UserId = id);
}
