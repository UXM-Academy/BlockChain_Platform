"use strict";

function IncomingMsg({ msg, time_data, img_src }) {
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img src={img_src} alt="seller"></img>
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{msg}</p>
          <span className="time_date">{time_data}</span>
        </div>
      </div>
    </div>
  );
}

function OutgoingMsg({ msg, time_data }) {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{msg}</p>
        <span className="time_date">{time_data}</span>
      </div>
    </div>
  );
}

function RequestMsg({ time_data, img_src }) {
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img src={img_src} alt="seller"></img>
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>
            고객님 상품의 제작 진행을 위해
            <br />
            작업 승인을 부탁드립니다.
            <br />
            <button type="button" className="btn btn-success trigger">
              자세히 보기
            </button>
            <span className="time_date">{time_data}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const e = React.createElement;

class MsgHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imcoming_data: [
        {
          type: "incoming_msg",
          msg: "Apollo University, Delhi, India Test",
          time_data: "11:01 AM | Today",
          img_src: "https://ptetutorials.com/images/user-profile.png",
        },
        {
          type: "incoming_msg",
          msg: "Apollo University, Delhi, India Test",
          time_data: "11:01 AM | Today",
          img_src: "https://ptetutorials.com/images/user-profile.png",
        },
      ],
      outgoing_data: [
        {
          type: "outgoing_msg",
          msg: "Apollo University, Delhi, India Test",
          time_data: "11:01 AM | Today",
        },
        {
          type: "outgoing_msg",
          msg: "Apollo University, Delhi, India Test",
          time_data: "11:01 AM | Today",
        },
      ],
      request_data: [
        {
          type: "request_msg",
          time_data: "11:01 AM | Today",
          img_src: "https://ptetutorials.com/images/user-profile.png",
        },
      ],
    };
  }

  show() {
    // 시간순으로 정렬 그리고 반복
    let showData = [];
    //임시
    for (let i = 0; i < 2; i++) {
      showData.push(this.state.imcoming_data[i]);
    }
    for (let i = 0; i < 2; i++) {
      showData.push(this.state.outgoing_data[i]);
    }
    showData.push(this.state.request_data[0]);
    return showData;
  }

  render() {
    console.log(this.state.imcoming_data[0]);
    const showData = this.show();
    console.log(showData);
    return (
      <div>
        {showData.map((data, i) => {
          if (data.type == "incoming_msg") {
            return (
              <IncomingMsg
                key={i}
                msg={data.msg}
                time_data={data.time_data}
                img_src={data.img_src}
              />
            );
          } else if (data.type == "outgoing_msg") {
            return (
              <OutgoingMsg key={i} msg={data.msg} time_data={data.time_data} />
            );
          } else {
            return (
              <RequestMsg
                key={i}
                time_data={data.time_data}
                img_src={data.img_src}
              />
            );
          }
        })}
      </div>
    );
  }
}
// Find all DOM containers, and render Like buttons into them.
// domContainer = document.querySelector("#acceptApproval");
// console.log("true");
// ReactDOM.render(e(AcceptApproval), domContainer);
// ReactDOM.render(<AcceptApproval></AcceptApproval>);
document.querySelectorAll(".msg_history").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(MsgHistory), domContainer);
});
