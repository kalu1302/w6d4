const Router = require('./router');
const Inbox = require('./Inbox');

const routes = new Object;
routes.Inbox = Inbox;

document.addEventListener("DOMContentLoaded", function(event) {

  const sidebar = window.document.querySelectorAll(".sidebar-nav li");
  for (let i = 0; i < sidebar.length; i++) {
    sidebar[i].addEventListener("click", function() {
    let location = sidebar[i].innerText;
    window.location.hash = location;
    const contentNode = document.querySelector(".content");
    let newRoute = new Router(contentNode, routes);
    newRoute.start();
    });
  }
});
