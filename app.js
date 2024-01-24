"use strict";

import { Counter } from "./Counter.js";
import { CounterEvent } from "./CounterEvent.js";

const counter = new Counter();

counter.on(CounterEvent.COUNTER_STARTED, (event) => {
  console.log(`${event.type} count: ${event.count}`);
  console.log(event);
});

counter.on(CounterEvent.COUNTER_UPDATED, (event) => {
  console.log(`${event.type} count: ${event.count}`);
  console.log(event);
});

counter.on(CounterEvent.COUNTER_FINISHED, (event) => {
  console.log(`${event.type} count: ${event.count}`);
  console.log(event);
});

counter.off(CounterEvent.COUNTER_UPDATED);

counter.run();
