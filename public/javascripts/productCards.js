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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ProductCard(_ref) {
  var product = _ref.product;

  var imagetobase64 = product.image.toString("base64");
  console.log(imagetobase64);
  var base64Src = "data:image/jpeg;base64," + imagetobase64;
  var href = "/serviceInfo/" + product.cid;
  // const href = `/serviceInfo`;
  return React.createElement(
    "div",
    { className: "col-sm-6 col-md-4 p-1" },
    React.createElement(
      "a",
      { href: href },
      React.createElement(
        "div",
        { className: "card", style: { width: "14rem" } },
        React.createElement("img", { className: "card-img-top", src: base64Src, alt: "..." }),
        React.createElement(
          "div",
          { className: "card-body" },
          React.createElement(
            "h5",
            { className: "card-title" },
            product.title
          ),
          React.createElement(
            "p",
            { className: "card-text" },
            product.explanation
          ),
          React.createElement(
            "h6",
            null,
            product.price + " MJC"
          )
        )
      )
    )
  );
}

var ProductCards = function (_React$Component) {
  _inherits(ProductCards, _React$Component);

  function ProductCards(props) {
    _classCallCheck(this, ProductCards);

    var _this = _possibleConstructorReturn(this, (ProductCards.__proto__ || Object.getPrototypeOf(ProductCards)).call(this, props));

    console.log(props);
    return _this;
  }

  _createClass(ProductCards, [{
    key: "render",
    value: function render() {
      var showData = this.props.products;
      console.log(this.props.products);
      return React.createElement(
        "div",
        { className: "row" },
        showData.map(function (product, i) {
          console.log(product);
          console.log(i);
          return React.createElement(ProductCard, { key: i, product: product });
        })
      );
    }
  }]);

  return ProductCards;
}(React.Component);

var e = React.createElement;

// document.querySelectorAll("#productCards").forEach((domContainer) => {
//   // Read the comment ID from a data-* attribute.
//   console.log(domContainer);
//   console.log(products);

//   ReactDOM.render(<ProductCards products={products} />, domContainer);
// });

var domContainer = document.getElementById("productCards");
console.log(domContainer);
domContainer.addEventListener("showCategory", function (e) {
  console.log(e);
  ReactDOM.render(React.createElement(ProductCards, { products: products }), e.target);
}, false);