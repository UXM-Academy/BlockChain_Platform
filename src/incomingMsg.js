"use strict";

const e = React.createElement;

class IncomingMsg extends React.Component {
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
      <div>
        <p>Apollo University, Delhi, India Test</p>
        <span className="time_date"> 11:01 AM | Today</span>
      </div>
    );
  }
}
// Find all DOM containers, and render Like buttons into them.
// domContainer = document.querySelector("#acceptApproval");
// console.log("true");
// ReactDOM.render(e(AcceptApproval), domContainer);
// ReactDOM.render(<AcceptApproval></AcceptApproval>);
document.querySelectorAll("#incomingMsg").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(IncomingMsg), domContainer);
});
