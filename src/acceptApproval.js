"use strict";

const e = React.createElement;

class AcceptApproval extends React.Component {
  constructor(props) {
    super(props);

    // 파일 cid 다운 받기를 누르면 읽기(필요가 있을때 복호화)
    // content(메시지) cid 바로 읽기(복호화)
    // author: 판매자 id
    // prev: cid
    console.log(true);
    this.state = {
      file: "",
      content: "",
      author: "",
      prev: "",
    };
  }

  render() {
    return (
      <div>
        <button className="file-download" type="button">
          <i className="fa fa-download" aria-hidden="true"></i>
        </button>
        <div className="wrapper">
          <div>
            <label htmlFor="number">합의횟수</label>
          </div>
          <div style={{ paddingTop: "16px" }}>lsafhoas</div>
          <div>
            <label htmlFor="messages">내용</label>
          </div>
          <div style={{ paddingTop: "16px" }}>asdfasdf</div>
          <div>
            <label htmlFor="date">수신일</label>
          </div>
          <div style={{ paddingTop: "16px" }}>asdfasdfas</div>
        </div>
      </div>
    );
  }
}
// Find all DOM containers, and render Like buttons into them.
// domContainer = document.querySelector("#acceptApproval");
// console.log("true");
// ReactDOM.render(e(AcceptApproval), domContainer);
// ReactDOM.render(<AcceptApproval></AcceptApproval>);
document.querySelectorAll("#acceptApproval").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(AcceptApproval), domContainer);
});
