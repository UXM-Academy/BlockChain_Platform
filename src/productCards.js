"use strict";

// .col-sm-6.col-md-4.p-1
//   a(href='/serviceInfo' )
//     //- .card(style='width: 18rem;')
//     .card(style='width: 14rem;')
//       img.card-img-top(src='/images/201992.jpg' alt='...')
//       .card-body
//         h5.card-title productTitle
//         p.card-text
//           | productExplain
function ProductCard({ product }) {
  const imagetobase64 = product.image.toString("base64");
  console.log(imagetobase64);
  const base64Src = "data:image/jpeg;base64," + imagetobase64;
  const href = `/serviceInfo/${product.cid}`;
  // const href = `/serviceInfo`;
  return (
    <div className="col-sm-6 col-md-4 p-1">
      <a href={href}>
        <div className="card" style={{ width: "14rem" }}>
          <img className="card-img-top" src={base64Src} alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.explanation}</p>
            <h6>{`${product.price} MJC`}</h6>
          </div>
        </div>
      </a>
    </div>
  );
}

class ProductCards extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const showData = this.props.products;
    console.log(this.props.products);
    return (
      <div className="row">
        {showData.map((product, i) => {
          console.log(product);
          console.log(i);
          return <ProductCard key={i} product={product} />;
        })}
      </div>
    );
  }
}

const e = React.createElement;

// document.querySelectorAll("#productCards").forEach((domContainer) => {
//   // Read the comment ID from a data-* attribute.
//   console.log(domContainer);
//   console.log(products);

//   ReactDOM.render(<ProductCards products={products} />, domContainer);
// });

const domContainer = document.getElementById("productCards");
console.log(domContainer);
domContainer.addEventListener(
  "showCategory",
  function (e) {
    console.log(e);
    ReactDOM.render(<ProductCards products={products} />, e.target);
  },
  false
);
