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
        <span className="time_date">{time_data.toLocaleString()}</span>
      </div>
    </div>
  );
}

function RequestMsg({ time_data, img_src, chat }) {
  return (
    <div>
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
              <button
                type="button"
                className="acceptApproval btn btn-success trigger"
                onClick={(e) => {
                  const chatData = document.querySelectorAll(".chatData");
                  chatData[1].innerHTML = chat.message;
                  const fileDownload = document.querySelector(".file-download")
                  var imagetobase64 = chat.file.toString("base64");
                  var base64Src = "data:image/jpeg;base64," + imagetobase64;
                  fileDownload.setAttribute( 'href', base64Src )
                }}
              >
                자세히 보기
              </button>
              <span className="time_date">{time_data.toLocaleString()}</span>
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

const e = React.createElement;

class MsgHistory extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    // console.log(this.state.imcoming_data[0]);
    // const showData = this.show();
    const showData = this.props.chats.reverse();
    console.log(showData);
    return (
      <div>
        {showData.map((data, i) => {
          console.log("data.type", data.type);
          if (data.type === "request") {
            return (
              <RequestMsg
                key={i}
                // time_data={"11:01 AM | Today"}
                time_data={data.date}
                img_src={"https://ptetutorials.com/images/user-profile.png"}
                chat={data}
              />
            );
          } else if (data.type === "accept") {
            return (
              <OutgoingMsg
                key={i}
                msg={"작업승인 완료"}
                // time_data={"11:01 AM | Today"}
                time_data={data.date}
              />
            );
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
        })}
      </div>
    );
  }
}

function popup() {
  let modal = document.querySelectorAll(".modal");
  let trigger = document.querySelectorAll(".trigger");
  let closeButton = document.querySelectorAll(".close-button");
  let cancelButton = document.querySelectorAll(".cancel");
  let okButton = document.querySelectorAll(".ok");
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
  for (let i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener("click", toggleModal);
  }
  // if (closeButton.length !== 0) {
  //   closeButton[0].addEventListener("click", cancelToggle);
  //   closeButton[1].addEventListener("click", cancelToggle);
  // }

  for (let i = 0; i < cancelButton.length; i++) {
    closeButton[i].addEventListener("click", cancelToggle);
    cancelButton[i].addEventListener("click", cancelToggle);
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

const domContainer = document.querySelector(".msg_history");
domContainer.addEventListener(
  "showCategory",
  (e) => {
    ReactDOM.render(<MsgHistory chats={chats} />, e.target);
    popup();
    // ReactDOM.render(<MsgHistory target={e.target.id}/>, e.target);
    console.log("msgHistory changed");
  },
  false
);
