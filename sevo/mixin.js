"use strict";

function addMixin(className, mixins) {
  for (let mixin of mixins) {
    Object.assign(className, mixin);
  }
}

export { addMixin };
