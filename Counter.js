"use strict";

import { EventDispatcher } from "./sevo/events/EventDispatcher.js";
import { CounterEvent } from "./CounterEvent.js";
import { addMixin } from "./sevo/mixin.js";

class Counter {
  _start;
  _end;
  _step;
  _count;

  get count() {
    return this._count;
  }

  constructor(start = 0, end = 10, step = 1) {
    //EventDispatcher.init.call(this);
    this.init();

    this._start = start;
    this._end = end;
    this._step = step;
    this._count = this._start;
    console.log("Counter");
    console.log(this);
  }

  run() {
    this.emit(
      new CounterEvent(CounterEvent.COUNTER_STARTED, this, this._count)
    );
    for (; this._count < this._end; this._count += this._step) {
      this.emit(
        new CounterEvent(CounterEvent.COUNTER_UPDATED, this, this._count)
      );
    }
    this.emit(
      new CounterEvent(CounterEvent.COUNTER_FINISHED, this, this._count)
    );
  }
}

addMixin(Counter.prototype, [EventDispatcher]);

export { Counter };
