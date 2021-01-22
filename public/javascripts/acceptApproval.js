"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var AcceptApproval = function (_React$Component) {
  _inherits(AcceptApproval, _React$Component);

  function AcceptApproval(props) {
    _classCallCheck(this, AcceptApproval);

    // 파일 cid 다운 받기를 누르면 읽기(필요가 있을때 복호화)
    // content(메시지) cid 바로 읽기(복호화)
    // author: 판매자 id
    // prev: cid
    var _this = _possibleConstructorReturn(this, (AcceptApproval.__proto__ || Object.getPrototypeOf(AcceptApproval)).call(this, props));

    console.log(true);
    _this.state = {
      file: "",
      content: "",
      author: "",
      prev: ""
    };
    return _this;
  }

  _createClass(AcceptApproval, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { className: "file-download", type: "button" },
          React.createElement("i", { className: "fa fa-download", "aria-hidden": "true" })
        ),
        React.createElement(
          "div",
          { className: "wrapper" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "number" },
              "\uD569\uC758\uD69F\uC218"
            )
          ),
          React.createElement(
            "div",
            { style: { paddingTop: "16px" } },
            "lsafhoas"
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "messages" },
              "\uB0B4\uC6A9"
            )
          ),
          React.createElement(
            "div",
            { style: { paddingTop: "16px" } },
            "asdfasdf"
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "date" },
              "\uC218\uC2E0\uC77C"
            )
          ),
          React.createElement(
            "div",
            { style: { paddingTop: "16px" } },
            "asdfasdfas"
          )
        )
      );
    }
  }]);

  return AcceptApproval;
}(React.Component);
// Find all DOM containers, and render Like buttons into them.
// domContainer = document.querySelector("#acceptApproval");
// console.log("true");
// ReactDOM.render(e(AcceptApproval), domContainer);
// ReactDOM.render(<AcceptApproval></AcceptApproval>);


document.querySelectorAll("#acceptApproval").forEach(function (domContainer) {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(AcceptApproval), domContainer);
});