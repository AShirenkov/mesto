export default class UserInfo {
  constructor(data) {
    this._userNameSelector = data.userName;

    this._userDescriptionSelector = data.userDescription;
    this._currentUserInfo = {};
    this._userName = document.querySelector(this._userNameSelector);
    this._userDescription = document.querySelector(
      this._userDescriptionSelector
    );
  }

  getUserInfo() {
    this._currentUserInfo.name = this._userName.textContent;
    this._currentUserInfo.description = this._userDescription.textContent;

    return this._currentUserInfo;
  }
  setUserInfo(name, description) {
    this._userName.textContent = name;
    this._userDescription.textContent = description;
  }
}
