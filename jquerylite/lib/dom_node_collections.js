class DOMNodeCollection {
  constructor(array) {
    this.HTMLElements = array;
  }

  first () {
    return this.HTMLElements[0];
  }


  html(str) {
    if (str === undefined) {
      return this.HTMLElements[0].innerHTML;
    } else {
      this.HTMLElements.forEach( (el) => {
        //set string?
        el.innerHTML = str;
      });
    }
  }

  empty() {
    this.HTMLElements.forEach( (el) => {
      el.innerHTML = "";});
  }

  append(arg) {
    if (arg instanceof DOMNodeCollection) {
      arg.forEach ((el) => {
          this.append(el);
        });
    } else if (arg instanceof HTMLElement) {
      this.HTMLElements.forEach ((el) => {
        el.innerHTML = el.innerHTML.concat(arg.outerHTML);
      });
    } else if (arg instanceof String) {
      this.HTMLElements.forEach ((el) => {
        el.innerHTML = el.innerHTML.concat(arg);
      });
    }
  }

  attr(name, value) {
    if (value !== undefined) {
      this.HTMLElements.forEach((el) => {
        el.setAttribute(name, value);
        console.log(el.getAttribute(name));
      });
    } else {
      return this.HTMLElements[0].getAttribute(name);
    }
  }

  addClass(className) {
    this.HTMLElements.forEach( (el) => {
      el.className = className;
    });
  }

  removeClass(className) {
    this.HTMLElements.forEach( (el) => {
      if (el.className === className) {
        el.className = "";
      }
    });
  }

  children() {
    let childrenDOMNode = [];
    this.HTMLElements.forEach((el) => {
      let array = Array.from(el.children);
      array.forEach((el2) => {
        childrenDOMNode.push(el2);
      });
    });

    return new DOMNodeCollection(childrenDOMNode);
  }

  parent() {
    let parentDOMNode = [];
    this.HTMLElements.forEach((el) => {
        parentDOMNode.push(el.parentElement);
    });

    return new DOMNodeCollection(parentDOMNode);
  }

  find(str) {
    let found = [];
    this.HTMLElements.forEach((el) => {
      Array.from(el.querySelectorAll(str)).forEach((el2) => {
        found.push(el2);
      });
    });
    return new DOMNodeCollection(found);
  }

  remove() {
    this.HTMLElements.forEach( (el) => {
      el.remove();
    });
  }
}


module.exports = DOMNodeCollection;
