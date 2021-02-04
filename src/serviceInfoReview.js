"use strict";

function StarView({ name = "이모씨", starRate = "3", msg }) {
  return (
    <div className="container">
      <div className="review">
        <span>{name}</span>
        <div className="rating" data-rate={starRate}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <br></br>
      <div className="main_1 main_common">{msg}</div>
      <br></br>
    </div>
  );
}

class ServiceInfoReview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let showData;
    return (
      <div className="row">
        {showData.map((product, i) => {
          console.log(product);
          console.log(i);
          return <StarView key={i} />;
        })}
      </div>
    );
  }
}

const domContainer = document.getElementById("serviceInfoReview");
console.log(domContainer);
domContainer.addEventListener(
  "showCategory",
  function (e) {
    // const domContainer = e;
    console.log(e);
    ReactDOM.render(<ServiceInfoReview />, e.target);
  },
  false
);
