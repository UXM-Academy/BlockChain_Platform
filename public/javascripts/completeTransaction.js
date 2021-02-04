// tr
//   th.text-center(scope="row")
//     div
//       img(src="images/117246.jpg", width="100px")
//       br
//       | 고양이사진
//   td.text-center sam
//   td.text-center 2021/01/19
//   td
//     button#btn-review.btn.btn-primary(type="button" data-bs-toggle="collapse" data-bs-target="#demo" aria-expanded="false" aria-controls="demo")
//       | 리뷰 작성하기
//     include reviewForm.pug

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ReviewForm(_ref) {
  var id = _ref.id;

  return React.createElement(
    "div",
    { id: id, className: "collapse" },
    React.createElement(
      "h4",
      null,
      "\uBCC4\uC810\uC8FC\uAE30"
    ),
    React.createElement(
      "div",
      { className: "make_star" },
      React.createElement(
        "select",
        { id: "makeStar", name: "" },
        React.createElement(
          "option",
          { value: "1" },
          "1"
        ),
        React.createElement(
          "option",
          { value: "2" },
          "2"
        ),
        React.createElement(
          "option",
          { value: "3" },
          "3"
        ),
        React.createElement(
          "option",
          { value: "4" },
          "4"
        ),
        React.createElement(
          "option",
          { value: "5" },
          "5"
        )
      ),
      React.createElement(
        "div",
        { className: "rating", "data-rate": "3" },
        React.createElement("i", { className: "fas fa-star" }),
        React.createElement("i", { className: "fas fa-star" }),
        React.createElement("i", { className: "fas fa-star" }),
        React.createElement("i", { className: "fas fa-star" }),
        React.createElement("i", { className: "fas fa-star" })
      )
    ),
    React.createElement("hr", { className: "line" }),
    React.createElement(
      "div",
      { className: "main" },
      React.createElement("textarea", {
        className: "form-control",
        name: "review",
        placeholder: "\uC194\uC9C1\uD55C \uD6C4\uAE30\uB97C \uC791\uC131\uD574\uC8FC\uC138\uC694",
        cols: "30",
        rows: "3"
      })
    ),
    React.createElement(
      "div",
      { className: "last" },
      React.createElement(
        "a",
        { id: "btn-ok", className: "btn btn-primary", href: "#", role: "button" },
        "\uD655\uC778"
      )
    )
  );
}

function CompleteElement(_ref2) {
  var _ref2$photo = _ref2.photo,
      photo = _ref2$photo === undefined ? "images/117246.jpg" : _ref2$photo,
      _ref2$name = _ref2.name,
      name = _ref2$name === undefined ? "고양이 사진" : _ref2$name,
      _ref2$seller = _ref2.seller,
      seller = _ref2$seller === undefined ? "sam" : _ref2$seller,
      _ref2$date = _ref2.date,
      date = _ref2$date === undefined ? "2021/01/19" : _ref2$date,
      id = _ref2.id;

  var stringId = "#" + id;
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "th",
      { className: "text-center", scope: "row" },
      React.createElement(
        "div",
        null,
        React.createElement("img", { src: photo, width: "100px" }),
        React.createElement("br", null),
        name
      )
    ),
    React.createElement(
      "td",
      { className: "text-center" },
      seller
    ),
    React.createElement(
      "td",
      { className: "text-center" },
      date
    ),
    React.createElement(
      "td",
      null,
      React.createElement("button", {
        id: "btn-review",
        className: "btn btn-primary",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": stringId,
        "aria-expanded": "false",
        "aria-controls": id
      }),
      React.createElement(ReviewForm, { id: id })
    )
  );
}

var CompleteTransaction = function (_React$Component) {
  _inherits(CompleteTransaction, _React$Component);

  function CompleteTransaction(props) {
    _classCallCheck(this, CompleteTransaction);

    return _possibleConstructorReturn(this, (CompleteTransaction.__proto__ || Object.getPrototypeOf(CompleteTransaction)).call(this, props));
  }

  _createClass(CompleteTransaction, [{
    key: "render",
    value: function render() {
      var showData = [0] * 10;
      // console.log(this.props);
      return React.createElement(
        "div",
        { className: "tbody" },
        showData.map(function (product, i) {
          console.log(product);
          console.log(i);
          return React.createElement(CompleteElement, { key: i });
        })
      );
    }
  }]);

  return CompleteTransaction;
}(React.Component);

// async function init() {


var domContainer = document.getElementById("completeTransaction");
console.log(domContainer);
domContainer.addEventListener("showCategory", function (e) {
  // const domContainer = e;
  console.log(e);
  ReactDOM.render(React.createElement(CompleteTransaction, null), e.target);
}, false);
// }

// init();