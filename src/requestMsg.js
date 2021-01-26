"use strict";

const e = React.createElement;

class RequestMsg extends React.Component {
  constructor(props) {
    super(props);

    // 파일 cid 다운 받기를 누르면 읽기(필요가 있을때 복호화)
    // content(메시지) cid 바로 읽기(복호화)
    // author: 판매자 id
    // prev: cid
    console.log(true);
    this.state = {
      msg: "",
      time_date: "",
    };
  }

  render() {
    return (
      <div className="incoming_msg">
        <div className="incoming_msg_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="seller"
          ></img>
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>
              고객님 상품의 제작 잔행을 위해
              <br />
              작업 승인을 부탁드립니다.
              <br />
              <button type="button" className="btn btn-success trigger">
                자세히 보기
              </button>
              <span className="time_date">11:01 AM | June 9</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

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
