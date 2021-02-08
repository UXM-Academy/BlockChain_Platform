"use strict";

require("buffer");
const Ipfs = require("ipfs");

const reader = new window.FileReader();
const domContainer = document.querySelectorAll(".serviceInfo");
const sellerIdx = document.getElementById("sellerIdx");
const cid = document.querySelector("input#cid").value;
async function init() {
  if (typeof ipfs !== "null") {
    ipfs = await Ipfs.create();
    console.log(ipfs);
  } else {
    console.log("이미 있음");
  }

  let product = await ipfs.dag.get(cid);
  product = product.value;
  console.log(product);
  console.log(domContainer);
  sellerIdx.value = product.sellerIdx;
  const imagetobase64 = product.image.toString("base64");
  const base64Src = "data:image/jpeg;base64," + imagetobase64;

  domContainer[0].src = base64Src;
  domContainer[1].innerHTML = product.title;
  domContainer[2].innerHTML = product.price;
  domContainer[3].innerHTML = product.explanation;
}

init();
