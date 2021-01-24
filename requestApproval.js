"use strict";

import _regeneratorRuntime from "babel-runtime/regenerator";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestApproval = function (_React$Component) {
  _inherits(RequestApproval, _React$Component);

  function RequestApproval(props) {
    var _this2 = this;

    _classCallCheck(this, RequestApproval);

    // 파일 cid 다운 받기를 누르면 읽기(필요가 있을때 복호화)
    // content(메시지) cid 바로 읽기(복호화)
    // author: 판매자 id
    // prev: cid

    var _this = _possibleConstructorReturn(this, (RequestApproval.__proto__ || Object.getPrototypeOf(RequestApproval)).call(this, props));

    _this.fileHandle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));
    _this.state = {
      file: "",
      content: "",
      author: "",
      prev: ""
    };
    return _this;
  }

  _createClass(RequestApproval, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("load", this.fileHandle);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "label",
          { htmlFor: "progress" },
          "\uC9C4\uD589\uC0C1\uD669"
        ),
        React.createElement("input", {
          type: "progress",
          name: "progress",
          placeholder: "\uC9C4\uD589\uC0C1\uD669\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          required: "required"
        }),
        React.createElement(
          "label",
          { htmlFor: "picture" },
          "\uC0AC\uC9C4"
        ),
        React.createElement("input", { type: "file", name: "FileName" }),
        React.createElement("input", {
          className: "ok request_close_btn",
          type: "button",
          value: "\uBCF4\uB0B4\uAE30",
          style: { marginTop: "20px" }
        }),
        React.createElement("input", {
          className: "cancel request_close_btn",
          type: "button",
          value: "\uCDE8\uC18C",
          style: { marginTop: "20px" }
        })
      );
    }
  }]);

  return RequestApproval;
}(React.Component);

document.querySelectorAll("#requestApproval").forEach(function (domContainer) {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(RequestApproval), domContainer);
});