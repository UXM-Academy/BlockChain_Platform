"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function IncomingMsg(_ref) {
  var msg = _ref.msg,
      time_data = _ref.time_data,
      img_src = _ref.img_src;

  return React.createElement(
    "div",
    { className: "incoming_msg" },
    React.createElement(
      "div",
      { className: "incoming_msg_img" },
      React.createElement("img", { src: img_src, alt: "seller" })
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
          msg
        ),
        React.createElement(
          "span",
          { className: "time_date" },
          time_data
        )
      )
    )
  );
}

function OutgoingMsg(_ref2) {
  var msg = _ref2.msg,
      time_data = _ref2.time_data;

  return React.createElement(
    "div",
    { className: "outgoing_msg" },
    React.createElement(
      "div",
      { className: "sent_msg" },
      React.createElement(
        "p",
        null,
        msg
      ),
      React.createElement(
        "span",
        { className: "time_date" },
        time_data
      )
    )
  );
}

function RequestMsg(_ref3) {
  var time_data = _ref3.time_data,
      img_src = _ref3.img_src,
      chat = _ref3.chat;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "incoming_msg" },
      React.createElement(
        "div",
        { className: "incoming_msg_img" },
        React.createElement("img", { src: img_src, alt: "seller" })
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
            "\uACE0\uAC1D\uB2D8 \uC0C1\uD488\uC758 \uC81C\uC791 \uC9C4\uD589\uC744 \uC704\uD574",
            React.createElement("br", null),
            "\uC791\uC5C5 \uC2B9\uC778\uC744 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.",
            React.createElement("br", null),
            React.createElement(
              "button",
              {
                type: "button",
                className: "acceptApproval btn btn-success trigger",
                onClick: function onClick(e) {
                  var chatData = document.querySelectorAll(".chatData");
                  chatData[1].innerHTML = chat.message;
                }
              },
              "\uC790\uC138\uD788 \uBCF4\uAE30"
            ),
            React.createElement(
              "span",
              { className: "time_date" },
              time_data
            )
          )
        )
      )
    ),
    React.createElement("br", null)
  );
}

var e = React.createElement;

var MsgHistory = function (_React$Component) {
  _inherits(MsgHistory, _React$Component);

  function MsgHistory(props) {
    _classCallCheck(this, MsgHistory);

    return _possibleConstructorReturn(this, (MsgHistory.__proto__ || Object.getPrototypeOf(MsgHistory)).call(this, props));
    // this.state = {
    //   imcoming_data: [
    //     {
    //       type: "incoming_msg",
    //       msg: "Apollo University, Delhi, India Test",
    //       time_data: "11:01 AM | Today",
    //       img_src: "https://ptetutorials.com/images/user-profile.png",
    //     },
    //     {
    //       type: "incoming_msg",
    //       msg: "Apollo University, Delhi, India Test",
    //       time_data: "11:01 AM | Today",
    //       img_src: "https://ptetutorials.com/images/user-profile.png",
    //     },
    //   ],
    //   outgoing_data: [
    //     {
    //       type: "outgoing_msg",
    //       msg: "Apollo University, Delhi, India Test",
    //       time_data: "11:01 AM | Today",
    //     },
    //     {
    //       type: "outgoing_msg",
    //       msg: "Apollo University, Delhi, India Test",
    //       time_data: "11:01 AM | Today",
    //     },
    //   ],
    //   request_data: [
    //     {
    //       type: "request_msg",
    //       time_data: "11:01 AM | Today",
    //       img_src: "https://ptetutorials.com/images/user-profile.png",
    //     },
    //   ],
    // };
  }

  // show() {
  //   // 시간순으로 정렬 그리고 반복
  //   let showData = [];
  //   //임시
  //   for (let i = 0; i < 2; i++) {
  //     showData.push(this.state.imcoming_data[i]);
  //   }
  //   for (let i = 0; i < 2; i++) {
  //     showData.push(this.state.outgoing_data[i]);
  //   }
  //   showData.push(this.state.request_data[0]);
  //   return showData;
  // }

  _createClass(MsgHistory, [{
    key: "render",
    value: function render() {
      // console.log(this.state.imcoming_data[0]);
      // const showData = this.show();
      var showData = this.props.chats.reverse();
      console.log(showData);
      return React.createElement(
        "div",
        null,
        showData.map(function (data, i) {
          console.log("data.type", data.type);
          if (data.type === "request") {
            return React.createElement(RequestMsg, {
              key: i,
              time_data: "11:01 AM | Today",
              img_src: "https://ptetutorials.com/images/user-profile.png",
              chat: data
            });
          } else if (data.type === "accept") {
            return React.createElement(OutgoingMsg, {
              key: i,
              msg: "작업승인 완료",
              time_data: "11:01 AM | Today"
            });
          }
          // if (data.type == "incoming_msg") {
          //   return (
          //     <IncomingMsg
          //       key={i}
          //       msg={data.msg}
          //       time_data={data.time_data}
          //       img_src={data.img_src}
          //     />
          //   );
          // } else if (data.type == "outgoing_msg") {
          //   return (
          //     <OutgoingMsg key={i} msg={data.msg} time_data={data.time_data} />
          //   );
          // } else {

          // }
        })
      );
    }
  }]);

  return MsgHistory;
}(React.Component);

function popup() {
  var modal = document.querySelectorAll(".modal");
  var trigger = document.querySelectorAll(".trigger");
  var closeButton = document.querySelectorAll(".close-button");
  var cancelButton = document.querySelectorAll(".cancel");
  var okButton = document.querySelectorAll(".ok");
  console.log(trigger);

  console.log(modal);

  function toggleModal(event) {
    // modal.classList.toggle("show-modal");
    console.log(event.target); //etc_send_btn
    if (event.target.classList.contains("acceptApproval")) {
      modal[1].classList.replace("modal", "show-modal");
      console.log("a");
    } else {
      modal[0].classList.replace("modal", "show-modal");
      console.log("b");
    }
  }

  function cancelToggle(event) {
    console.log(event.target);
    // modal.classList.toggle("show-modal"); //input.ok etc_close_btn
    if (event.target.classList.contains("acceptApproval")) {
      modal[1].classList.replace("show-modal", "modal");
    } else {
      modal[0].classList.replace("show-modal", "modal");
    }
    console.log(trigger);
    console.log(modal);
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  // if (trigger.length !== 0) {
  //   trigger[0].addEventListener("click", toggleModal);
  //   trigger[1].addEventListener("click", toggleModal);
  // }
  for (var i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener("click", toggleModal);
  }
  // if (closeButton.length !== 0) {
  //   closeButton[0].addEventListener("click", cancelToggle);
  //   closeButton[1].addEventListener("click", cancelToggle);
  // }

  for (var _i = 0; _i < cancelButton.length; _i++) {
    closeButton[_i].addEventListener("click", cancelToggle);
    cancelButton[_i].addEventListener("click", cancelToggle);
  }
  // cancel.addEventListener("click", cancelToggle);
  window.addEventListener("click", windowOnClick);
}
// Find all DOM containers, and render Like buttons into them.
// domContainer = document.querySelector("#acceptApproval");
// console.log("true");
// ReactDOM.render(e(AcceptApproval), domContainer);
// ReactDOM.render(<AcceptApproval></AcceptApproval>);
// document.querySelectorAll(".msg_history").forEach((domContainer) => {
//   // Read the comment ID from a data-* attribute.
//   console.log(domContainer);
//   ReactDOM.render(e(MsgHistory), domContainer);
// });

var domContainer = document.querySelector(".msg_history");
domContainer.addEventListener("showCategory", function (e) {
  ReactDOM.render(React.createElement(MsgHistory, { chats: chats }), e.target);
  popup();
  // ReactDOM.render(<MsgHistory target={e.target.id}/>, e.target);
  console.log("msgHistory changed");
}, false);