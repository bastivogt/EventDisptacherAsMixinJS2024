"use strict";

import { Event } from "./sevo/events/Event.js";

export class CounterEvent extends Event {
  _count;

  static get COUNTER_STARTED() {
    return "counter-started";
  }
  static get COUNTER_UPDATED() {
    return "counter-updated";
  }
  static get COUNTER_FINISHED() {
    return "counter-finished";
  }

  constructor(type, sender, count) {
    super(type, sender);
    this._count = count;
  }

  get count() {
    return this._count;
  }
}
