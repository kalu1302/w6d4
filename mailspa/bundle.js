/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Inbox {
	  render() {
	    let newEl = document.createElement("ul");
	    newEl.className = "messages";
	    newEl.innerHTML = "An Inbox Message";
	    return newEl;
	  }
	}

	module.exports = Inbox;


/***/ }
/******/ ]);