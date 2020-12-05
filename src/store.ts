import Vue from 'vue';

class Store {
  private _cnt: number;
  private _name: string;

  constructor() {
    this._cnt = 0;
    this._name = '';
  }

  inc() {
    this._cnt++;
  }

  get cnt() {
    return this._cnt;
  }
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}

export const globalStore = Vue.observable(new Store());
