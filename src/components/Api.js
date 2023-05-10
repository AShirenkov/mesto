export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _resFromServer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка сервера: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers }).then(
      this._resFromServer
    );
  }
  getMyUser() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(
      this._resFromServer
    );
  }

  sendNewCard(obj) {
    //console.log(JSON.stringify(obj));
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(obj),
    }).then(this._resFromServer);
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._resFromServer);
  }
}
