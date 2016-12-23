class Inbox {
  render() {
    let newEl = document.createElement("ul");
    newEl.className = "messages";
    newEl.innerHTML = "An Inbox Message";
    return newEl;
  }
}

module.exports = Inbox;
