function Router(node, routes) {
  this.node = node;
  this.routes = routes;
}

Router.prototype.start = function(){
  document.addEventListener("hashchange", this.render);
  this.render();
};

Router.prototype.activeRoute = function() {
  return this.routes[window.location.hash.slice(1)];
};

Router.prototype.render = function() {
  this.node.innerHTML = "";
  let component = this.activeRoute();
  if (component === undefined) {
  }
  let newEl = document.createElement("p");
  newEl.innerHTML = //;
  this.node.appendChild(newEl);
};

module.exports = Router;
