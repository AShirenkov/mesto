export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector; //document.querySelector(containerSelector);
  }

  /*setItem(element) {
    this._container.append(element);
  }*/

  addItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    console.log(this._renderedItems);
    console.log(this._container);
    console.log(this._renderer);

    this.clear();

    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
