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

// function handleClick() {
//   const msgContainer = document.querySelector(".msg_history");
//   msgContainer.dispatchEvent("showCategory");
//   console.log("inboxChat clicked");
// }

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ChatListComponent(_ref) {
  var tradeIdx = _ref.tradeIdx,
      trade = _ref.trade;

  console.log(trade);
  console.log(parseInt(trade.tradeId._hex));
  return React.createElement(
    "div",
    {
      className: "chat_list",
      id: parseInt(trade.tradeId._hex)

      // onClick={(e) => {
      // const tradeIdx = document.getElementById("tradeIdx");
      // tradeIdx.value = parseInt(trade.tradeId._hex);
      // console.log(tradeIdx.value);

      // console.log(myContract);
      // console.log(ipfs);
      // chat = []
      // e.target.id = parseInt(trade.tradeId._hex);
      // const msgContainer = document.querySelector(".msg_history");

      // const root = await myContract.getChat(parseInt(trade.tradeId._hex));
      // console.log(root);
      // let cid = root;
      // while (cid) {
      //   let current = await ipfs.dag.get(cid);
      //   console.log(current);
      //   const prev = current.value.productPrev;
      //   current.value.cid = cid;
      //   console.log(current.value.cid);
      //   chats.push(current.value);
      //   if (prev != "") {
      //     cid = prev;
      //   } else {
      //     break;
      //   }
      // }
      // console.log("IPFS:", chats);
      // msgContainer.dispatchEvent(event);
      // console.log("inboxChat clicked");
      // }}
    },
    React.createElement(
      "div",
      { className: "chat_people", id: parseInt(trade.tradeId._hex) },
      React.createElement(
        "div",
        { className: "chat_img", id: parseInt(trade.tradeId._hex) },
        React.createElement("img", {
          src: trade.photo,
          alt: "product",
          id: parseInt(trade.tradeId._hex)
        })
      ),
      React.createElement(
        "div",
        { id: parseInt(trade.tradeId._hex), className: "chat_ib" },
        React.createElement(
          "h5",
          { id: parseInt(trade.tradeId._hex) },
          trade.name,
          React.createElement(
            "span",
            { id: parseInt(trade.tradeId._hex), className: "chat_date" },
            trade.date
          )
        ),
        React.createElement(
          "p",
          { id: parseInt(trade.tradeId._hex), className: "text-center" },
          trade.explanation
        )
      )
    )
  );
}

var InboxChat = function (_React$Component) {
  _inherits(InboxChat, _React$Component);

  function InboxChat(props) {
    _classCallCheck(this, InboxChat);

    return _possibleConstructorReturn(this, (InboxChat.__proto__ || Object.getPrototypeOf(InboxChat)).call(this, props));
  }

  _createClass(InboxChat, [{
    key: "render",
    value: function render() {
      var trades = this.props.trades;
      var showData = [];
      console.log("임시출력");
      console.log(trades);
      for (var i = trades.length - 1; i >= 0; i--) {
        showData.push(trades[i]);
      }
      return React.createElement(
        "div",
        null,
        showData.map(function (trade, i) {
          return React.createElement(ChatListComponent, {
            key: i,
            trade: trade,
            tradeIdx: showData.length - 1 - i
          });
        })
      );
    }
  }]);

  return InboxChat;
}(React.Component);
// const e = React.createElement;

// document.querySelectorAll(".inbox_chat").forEach((domContainer) => {
//   // Read the comment ID from a data-* attribute.
//   console.log(domContainer);
//   ReactDOM.render(<InboxChat trades={trades}>, domContainer);
// });

var domContainer = document.querySelector(".inbox_chat");
console.log(domContainer);
domContainer.addEventListener("showCategory", function (e) {
  console.log(e);
  ReactDOM.render(React.createElement(InboxChat, { trades: trades }), e.target);
}, false);