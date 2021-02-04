"use strict";

// .chat_list
//   .chat_people
//     .chat_img
//       img(src='https://ptetutorials.com/images/user-profile.png' alt='sunil')
//     .chat_ib
//       h5
//         | 상품
//         span.chat_date Dec 25
//       p
//         | Test, which is a new approach to have all solutions
//         | astrology under one roof.

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ChatListComponent(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? "product title" : _ref$name,
      _ref$explanation = _ref.explanation,
      explanation = _ref$explanation === undefined ? "product explanation" : _ref$explanation,
      _ref$date = _ref.date,
      date = _ref$date === undefined ? "Dec 25" : _ref$date,
      _ref$photo = _ref.photo,
      photo = _ref$photo === undefined ? "/images/201992.jpg" : _ref$photo;

  return React.createElement(
    "div",
    { className: "chat_list" },
    React.createElement(
      "div",
      { className: "chat_people" },
      React.createElement(
        "div",
        { className: "chat_img" },
        React.createElement("img", { src: photo, alt: "product" })
      ),
      React.createElement(
        "div",
        { className: "chat_ib" },
        React.createElement(
          "h5",
          null,
          name,
          React.createElement(
            "span",
            { className: "chat_date" },
            date
          )
        ),
        React.createElement(
          "p",
          { className: "text-center" },
          explanation
        )
      )
    )
  );
}

var InboxChat = function (_React$Component) {
  _inherits(InboxChat, _React$Component);

  function InboxChat(props) {
    _classCallCheck(this, InboxChat);

    var _this = _possibleConstructorReturn(this, (InboxChat.__proto__ || Object.getPrototypeOf(InboxChat)).call(this, props));

    _this.state = {
      // data: [
      //   {
      //     title,
      //     explanation,
      //     price,
      //     photo,
      //   },
      // ],
    };
    return _this;
  }

  _createClass(InboxChat, [{
    key: "show",
    value: function show() {
      var showData = [];

      for (var i = 0; i < 5; i++) {
        showData.push(i);
      }
      return showData;
    }
  }, {
    key: "render",
    value: function render() {
      var showData = this.show();
      return React.createElement(
        "div",
        null,
        showData.map(function (data, i) {
          return React.createElement(ChatListComponent, { key: i });
        })
      );
    }
  }]);

  return InboxChat;
}(React.Component);

var e = React.createElement;

document.querySelectorAll(".inbox_chat").forEach(function (domContainer) {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(InboxChat), domContainer);
});