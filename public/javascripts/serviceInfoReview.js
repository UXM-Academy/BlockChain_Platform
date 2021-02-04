"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function StarView(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? "이모씨" : _ref$name,
      _ref$starRate = _ref.starRate,
      starRate = _ref$starRate === undefined ? "3" : _ref$starRate,
      msg = _ref.msg;

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "review" },
      React.createElement(
        "span",
        null,
        name
      ),
      React.createElement(
        "div",
        { className: "rating", "data-rate": starRate },
        React.createElement("i", { className: "fas fa-star" }),
        React.createElement("i", { className: "fas fa-star" }),
        React.createElement("i", { className: "fas fa-star" }),
        React.createElement("i", { className: "fas fa-star" }),
        React.createElement("i", { className: "fas fa-star" })
      )
    ),
    React.createElement("br", null),
    React.createElement(
      "div",
      { className: "main_1 main_common" },
      msg
    ),
    React.createElement("br", null)
  );
}

var ServiceInfoReview = function (_React$Component) {
  _inherits(ServiceInfoReview, _React$Component);

  function ServiceInfoReview(props) {
    _classCallCheck(this, ServiceInfoReview);

    return _possibleConstructorReturn(this, (ServiceInfoReview.__proto__ || Object.getPrototypeOf(ServiceInfoReview)).call(this, props));
  }

  _createClass(ServiceInfoReview, [{
    key: "render",
    value: function render() {
      var showData = void 0;
      return React.createElement(
        "div",
        { className: "row" },
        showData.map(function (product, i) {
          console.log(product);
          console.log(i);
          return React.createElement(StarView, { key: i });
        })
      );
    }
  }]);

  return ServiceInfoReview;
}(React.Component);

var domContainer = document.getElementById("serviceInfoReview");
console.log(domContainer);
domContainer.addEventListener("showCategory", function (e) {
  // const domContainer = e;
  console.log(e);
  ReactDOM.render(React.createElement(ServiceInfoReview, null), e.target);
}, false);