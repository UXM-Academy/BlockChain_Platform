var mongoose = require("mongoose"),
  mongoosePaginate = require("mongoose-paginate"),
  Schema = mongoose.Schema;

var schema = new Schema(
  {
    seller_id: { type: Schema.Types.ObjectId, ref: "User" },
    sellerIdx: { type: String },
    nickName: { type: String },
    img: { type: String },
    sellerIntro: { type: String },
    phone: { type: String },
    major: { type: Array },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

schema.plugin(mongoosePaginate);
var Seller = mongoose.model("Seller", schema);

module.exports = Seller;
