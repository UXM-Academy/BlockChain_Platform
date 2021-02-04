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

function ChatListComponent({
  name = "product title", //<- for buyer or "consumer name"<- for seller
  explanation = "product explanation",
  date = "Dec 25",
  photo = "/images/201992.jpg",
}) {
  return (
    <div className="chat_list">
      <div className="chat_people">
        <div className="chat_img">
          <img src={photo} alt="product"></img>
        </div>
        <div className="chat_ib">
          <h5>
            {name}
            <span className="chat_date">{date}</span>
          </h5>
          <p className="text-center">{explanation}</p>
        </div>
      </div>
    </div>
  );
}

class InboxChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [
      //   {
      //     title,
      //     explanation,
      //     price,
      //     photo,
      //   },
      // ],
    };
  }
  show() {
    let showData = [];

    for (let i = 0; i < 5; i++) {
      showData.push(i);
    }
    return showData;
  }
  render() {
    const showData = this.show();
    return (
      <div>
        {showData.map((data, i) => {
          return <ChatListComponent key={i} />;
        })}
      </div>
    );
  }
}
const e = React.createElement;

document.querySelectorAll(".inbox_chat").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(InboxChat), domContainer);
});
