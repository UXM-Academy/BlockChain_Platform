"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var RequestMsg = function (_React$Component) {
  _inherits(RequestMsg, _React$Component);

  function RequestMsg(props) {
    _classCallCheck(this, RequestMsg);

    // 파일 cid 다운 받기를 누르면 읽기(필요가 있을때 복호화)
    // content(메시지) cid 바로 읽기(복호화)
    // author: 판매자 id
    // prev: cid
    var _this = _possibleConstructorReturn(this, (RequestMsg.__proto__ || Object.getPrototypeOf(RequestMsg)).call(this, props));

    console.log(true);
    _this.state = {
      msg: "",
      time_date: ""
    };
    return _this;
  }

  _createClass(RequestMsg, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "incoming_msg" },
        React.createElement(
          "div",
          { className: "incoming_msg_img" },
          React.createElement("img", {
            src: "https://ptetutorials.com/images/user-profile.png",
            alt: "seller"
          })
        ),
        React.createElement(
          "div",
          { className: "received_msg" },
          React.createElement(
            "div",
            { className: "received_withd_msg" },
            React.createElement(
              "p",
              null,
              "\uACE0\uAC1D\uB2D8 \uC0C1\uD488\uC758 \uC81C\uC791 \uC794\uD589\uC744 \uC704\uD574",
              React.createElement("br", null),
              "\uC791\uC5C5 \uC2B9\uC778\uC744 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.",
              React.createElement("br", null),
              React.createElement(
                "button",
                { type: "button", className: "btn btn-success trigger" },
                "\uC790\uC138\uD788 \uBCF4\uAE30"
              ),
              React.createElement(
                "span",
                { className: "time_date" },
                "11:01 AM | June 9"
              )
            )
          )
        )
      );
    }
  }]);

  return RequestMsg;
}(React.Component);

// .incoming_msg
//   .incoming_msg_img
//     img(src='https://ptetutorials.com/images/user-profile.png' alt='sunil')
//   .received_msg
//     .received_withd_msg
//       p
//         | 고객님 상품의 제작 잔행을 위해
//         br
//         | 작업 승인을 부탁드립니다.
//         br
//         button.btn.btn-success.trigger(type="button") 자세히 보기
//       span.time_date  11:01 AM | June 9


export default RequestMsg;