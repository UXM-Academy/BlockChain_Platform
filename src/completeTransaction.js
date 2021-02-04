// tr
//   th.text-center(scope="row")
//     div
//       img(src="images/117246.jpg", width="100px")
//       br
//       | 고양이사진
//   td.text-center sam
//   td.text-center 2021/01/19
//   td
//     button#btn-review.btn.btn-primary(type="button" data-bs-toggle="collapse" data-bs-target="#demo" aria-expanded="false" aria-controls="demo")
//       | 리뷰 작성하기
//     include reviewForm.pug

"use strict";

function ReviewForm({ id }) {
  return (
    <div id={id} className="collapse">
      <h4>별점주기</h4>
      <div className="make_star">
        <select id="makeStar" name="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="rating" data-rate="3">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <hr className="line"></hr>
      <div className="main">
        <textarea
          className="form-control"
          name="review"
          placeholder="솔직한 후기를 작성해주세요"
          cols="30"
          rows="3"
        ></textarea>
      </div>
      <div className="last">
        <a id="btn-ok" className="btn btn-primary" href="#" role="button">
          확인
        </a>
      </div>
    </div>
  );
}

function CompleteElement({
  photo = "images/117246.jpg",
  name = "고양이 사진",
  seller = "sam",
  date = "2021/01/19",
  id,
}) {
  let stringId = `#${id}`;
  return (
    <tr>
      <th className="text-center" scope="row">
        <div>
          <img src={photo} width="100px"></img>
          <br></br>
          {name}
        </div>
      </th>
      <td className="text-center">{seller}</td>
      <td className="text-center">{date}</td>
      <td>
        <button
          id="btn-review"
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={stringId}
          aria-expanded="false"
          aria-controls={id}
        ></button>
        <ReviewForm id={id} />
      </td>
    </tr>
  );
}

class CompleteTransaction extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const showData = [0] * 10;
    // console.log(this.props);
    return (
      <div className="tbody">
        {showData.map((product, i) => {
          console.log(product);
          console.log(i);
          return <CompleteElement key={i} />;
        })}
      </div>
    );
  }
}

// async function init() {
const domContainer = document.getElementById("completeTransaction");
console.log(domContainer);
domContainer.addEventListener(
  "showCategory",
  function (e) {
    // const domContainer = e;
    console.log(e);
    ReactDOM.render(<CompleteTransaction />, e.target);
  },
  false
);
// }

// init();
