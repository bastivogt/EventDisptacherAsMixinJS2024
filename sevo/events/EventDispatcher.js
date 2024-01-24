"use strict";

const EventDispatcher = {
  _listeners: [],

  init() {
    console.log("EventDispatchet init");
  },

  has(type) {
    for (let item of this._listeners) {
      if (item.type === type) {
        return true;
      }
    }
    return false;
  },

  on(type, listener) {
    if (!this.has(type)) {
      this._listeners.push({ type: type, listener: listener });
      return true;
    }
    return false;
  },

  off(type) {
    if (this.has(type)) {
      for (let i = 0; i < this._listeners.length; i++) {
        if (this._listeners[i].type === type) {
          this._listeners.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  },

  emit(event) {
    if (this.has(event.type)) {
      for (let listener of this._listeners) {
        if (listener.type === event.type) {
          listener.listener(event);
          return true;
        }
      }
    }
    return false;
  },
};

export { EventDispatcher };
