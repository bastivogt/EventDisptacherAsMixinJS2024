"use strict";

export class Event {
  _type;
  _sender;

  constructor(type, sender) {
    this._type = type;
    this._sender = sender;
  }

  get type() {
    return this._type;
  }

  get sender() {
    return this._sender;
  }
}
