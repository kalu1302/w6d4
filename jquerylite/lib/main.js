const DOMNodeCollection = require('./dom_node_collections');

window.$l = function(arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection(arg);
  } else if (typeof arg === 'string') {
    let elements = document.querySelectorAll(arg);
    elements = Array.from(elements);
    return new DOMNodeCollection(elements);
  }
};
