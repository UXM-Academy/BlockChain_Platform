"use strict";

class RequestApproval extends React.Component {
  constructor(props) {
    super(props);

    // 파일 cid 다운 받기를 누르면 읽기(필요가 있을때 복호화)
    // content(메시지) cid 바로 읽기(복호화)
    // author: 판매자 id
    // prev: cid

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
        <label htmlFor="progress">&#xC9C4;&#xD589;&#xC0C1;&#xD669;</label>
        <input
          type="progress"
          name="progress"
          placeholder="진행상황을 입력해주세요."
          required="required"
        />
        <label htmlFor="picture">&#xC0AC;&#xC9C4;</label>
        <input type="file" name="FileName" />
        <input
          className="ok request_close_btn"
          type="button"
          value="보내기"
          style={{ marginTop: "20px" }}
        />
        <input
          className="cancel request_close_btn"
          type="button"
          value="취소"
          style={{ marginTop: "20px" }}
        />
      </div>
    );
  }
}
document.querySelectorAll("#requestApproval").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(RequestApproval), domContainer);
});
