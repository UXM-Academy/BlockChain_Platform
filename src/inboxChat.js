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

function ChatListComponent({
  trade,
  // name = "product title", //<- for buyer or "consumer name"<- for seller
  // explanation = "product explanation",
  // date = "Dec 25",
  // photo = "/images/201992.jpg",
}) {
  console.log(trade);
  console.log(parseInt(trade.tradeId._hex));
  return (
    <div
      className="chat_list"
      id = {parseInt(trade.tradeId._hex)}
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
    >
      <div className="chat_people">
        <div className="chat_img">
          <img src={trade.photo} alt="product"></img>
        </div>
        <div className="chat_ib">
          <h5>
            {trade.name}
            <span className="chat_date">{trade.date}</span>
          </h5>
          <p className="text-center">{trade.explanation}</p>
        </div>
      </div>
    </div>
  );
}

class InboxChat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const showData = this.props.trades;
    return (
      <div>
        {showData.map((trade, i) => {
          return <ChatListComponent key={i} trade={trade} />;
        })}
      </div>
    );
  }
}
// const e = React.createElement;

// document.querySelectorAll(".inbox_chat").forEach((domContainer) => {
//   // Read the comment ID from a data-* attribute.
//   console.log(domContainer);
//   ReactDOM.render(<InboxChat trades={trades}>, domContainer);
// });

const domContainer = document.querySelector(".inbox_chat");
console.log(domContainer);
domContainer.addEventListener(
  "showCategory",
  function (e) {
    console.log(e);
    ReactDOM.render(<InboxChat trades={trades} />, e.target);
  },
  false
);
