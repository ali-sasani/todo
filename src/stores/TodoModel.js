import { observable, action } from "mobx";

export default class TodoModel {
  store;
  id;

  @observable title;
  @observable completed;

  constructor(store, title, completed, id, type, time) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
    this.type = type;
    this.time = time;
  }

  @action
  toggle() {
    this.completed = !this.completed;
  }
}
