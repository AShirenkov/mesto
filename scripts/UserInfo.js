export default class UserInfo {
  constructor(data) {
    this._userNameSelector = data.userName;

    this._userDescriptionSelector = data.userDescription;
    this._currentUserInfo = {};
  }

  getUserInfo() {
    this._currentUserInfo.name = document.querySelector(
      this._userNameSelector
    ).textContent;
    this._currentUserInfo.description = document.querySelector(
      this._userDescriptionSelector
    ).textContent;

    return this._currentUserInfo;
  }
  setUserInfo(name, description) {
    document.querySelector(this._userNameSelector).textContent = name;
    document.querySelector(this._userDescriptionSelector).textContent =
      description;
  }
}
