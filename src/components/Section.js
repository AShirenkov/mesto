export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(items) {
    this._renderedItems = items;
    this.clear();

    this._renderedItems.reverse().forEach((item) => {
      this._renderer(item);
    });
  }
}
