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
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? "productTitle" : _ref$title,
      _ref$explanation = _ref.explanation,
      explanation = _ref$explanation === undefined ? "productExplain" : _ref$explanation,
      _ref$price = _ref.price,
      price = _ref$price === undefined ? 1 : _ref$price,
      _ref$img_src = _ref.img_src,
      img_src = _ref$img_src === undefined ? "/images/201992.jpg" : _ref$img_src;

  return React.createElement(
    "div",
    { className: "col-sm-6 col-md-4 p-1" },
    React.createElement(
      "a",
      { href: "/serviceInfo" },
      React.createElement(
        "div",
        { className: "card", style: { width: "14rem" } },
        React.createElement("img", { className: "card-img-top", src: img_src, alt: "..." }),
        React.createElement(
          "div",
          { className: "card-body" },
          React.createElement(
            "h5",
            { className: "card-title" },
            title
          ),
          React.createElement(
            "p",
            { className: "card-text" },
            explanation
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

    _this.state = {
      // data: [
      //   {
      //     title,
      //     explanation,
      //     price,
      //     img_src,
      //   },
      // ],
    };
    return _this;
  }

  _createClass(ProductCards, [{
    key: "show",
    value: function show() {
      var showData = [];

      for (var i = 0; i < 10; i++) {
        showData.push(i);
      }
      return showData;
    }
  }, {
    key: "render",
    value: function render() {
      var showData = this.show();
      return React.createElement(
        "div",
        { className: "row" },
        showData.map(function (data, i) {
          return React.createElement(ProductCard, { key: i });
        })
      );
    }
  }]);

  return ProductCards;
}(React.Component);

var e = React.createElement;

document.querySelectorAll("#productCards").forEach(function (domContainer) {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(ProductCards), domContainer);
});