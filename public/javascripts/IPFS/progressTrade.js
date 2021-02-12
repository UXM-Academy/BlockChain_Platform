"use strict";

require("buffer");
const Ipfs = require("ipfs");
const { type } = require("os");
let userAccounts;

console.log(products);
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const reader = new window.FileReader();
const userIdx = document.getElementById("userIdx");
const sellerIdx = document.getElementById("sellerIdx");
const trId = document.getElementById("trId");
let tradeIdx = document.getElementById("tradeIdx");
const domContainer = document.querySelector(".inbox_chat");
console.log(trId);
const fileSend = document.getElementById("fileSend");
const acceptBtn = document.querySelector(".acceptApproval.ok");
const contentElement = document.getElementById("progresscontent");

async function init() {
  const chainId = await ethereum.request({ method: "eth_chainId" });

  userAccounts = await ethereum.request({ method: "eth_requestAccounts" });
  ethereum
    .request({ method: "eth_requestAccounts" })
    .then(handleAccountsChanged)
    .catch((err) => {
      console.error(err);
    });

  ethereum.on("accountsChanged", handleAccountsChanged);
  if (provider) {
    startApp(provider); // Initialize your app
  } else {
    console.log("Please install MetaMask!");
  }

  if (typeof ipfs !== "null") {
    ipfs = await Ipfs.create();
    console.log(ipfs);
  } else {
    console.log("이미 있음");
  }
  console.log(parseInt(userIdx.value));
  if (sellerIdx.value == "null") {
    trades = await myContract.getTrade(parseInt(userIdx.value));
  } else {
    trades = await myContract.getSellerTrade(parseInt(sellerIdx.value));
  }
  console.log("trades", trades);
  console.dir(document);
  const waitDom = await domContainer.dispatchEvent(event);
  console.log(waitDom);
  const chatList = domContainer.querySelectorAll(".chat_list");
  const listKeys = Array.from(chatList).map((chat) => chat.id);
  console.log(listKeys);
  fileSend.addEventListener("click", handlebuttons);
  acceptBtn.addEventListener("click", handleAcceptBtn);
  for (var i = 0; i < chatList.length; i++) {
    chatList[i].addEventListener("click", async (e) => {
      console.log("chatList.length", chatList.length);
      const idx = listKeys.indexOf(e.target.id);
      console.log("idx", idx);
      console.log(type(idx));
      console.log(`리스트 번호: ${idx}`);
      console.log("clicked in progressTrade");
      const msgContainer = document.querySelector(".msg_history");
      console.log(e.target);
      console.log(parseInt(e.target.id));
      trId.value = e.target.id;
      tradeIdx.value = chatList.length - idx - 1;
      console.log(trId.value);
      console.log(tradeIdx.value);
      const root = await myContract.getChat(parseInt(e.target.id));
      console.log(root);
      let cid = root;
      chats = [];
      while (cid) {
        let current = await ipfs.dag.get(cid);
        console.log(current);
        const prev = current.value.prev;
        current.value.cid = cid;
        console.log(current.value.cid);
        chats.push(current.value);
        if (prev != "") {
          cid = prev;
        } else {
          break;
        }
      }
      console.log("IPFS:", chats);
      msgContainer.dispatchEvent(event);
      console.log("inboxChat clicked");
    });
  }
}
async function handlebuttons(event) {
  event.preventDefault();
  console.dir(contentElement);
  console.log(trId.value);
  let root2 = await myContract.getChat(parseInt(trId.value));
  console.log(root2);
  let file = contentElement[1].files[0];
  let message = contentElement[0].value;
  console.log(file);
  reader.readAsArrayBuffer(file);
  reader.onloadend = async () => {
    const filebuffer = Buffer.from(reader.result);
    const chatCid = await ipfs.dag.put({
      type: "request",
      file: filebuffer,
      message: message,
      trId: parseInt(trId.value),
      userIdx: parseInt(userIdx.value),
      sellerIdx: parseInt(sellerIdx.value),
      prev: root2,
    });
    console.log(chatCid);
    console.log(chatCid.toString());
    const tx = await myContract.setChat(
      parseInt(trId.value),
      chatCid.toString()
    );
    const receipt = await tx.wait();
    const a = await myContract.getChat(parseInt(trId.value));
    console.log(a);
  };
}
async function handleAcceptBtn(event) {
  tradeIdx = document.getElementById("tradeIdx");
  event.preventDefault();
  console.log(tradeIdx.value);
  console.log(userIdx.value);
  const tx = await myContract.respondAgree(
    parseInt(tradeIdx.value),
    parseInt(userIdx.value)
  );
  const receipt = await tx.wait();
  const a = await myContract.getTrade(parseInt(userIdx.value));
  console.log(a);
  let root = await myContract.getChat(parseInt(trId.value));
  let message = contentElement[0].value;
  const chatCid = await ipfs.dag.put({
    type: "accept",
    message: message,
    trId: parseInt(trId.value),
    userIdx: parseInt(userIdx.value),
    sellerIdx: parseInt(sellerIdx.value),
    prev: root,
  });
  const tx2 = await myContract.setChat(
    parseInt(trId.value),
    chatCid.toString()
  );
  const receipt2 = await tx2.wait();
  const b = await myContract.getChat(parseInt(trId.value));
  console.log(b);
}

function startApp(provider) {
  if (provider.provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  } else {
    // const contractAddress = "0xD4EE6eE1E06E8dCc7A7008d1DfE312f8AEBBbA16";
    // myContract = new web3js.eth.Contract(abi, contractAddress);
    myContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log(myContract);
  }
}

let currentAccount = null;

function handleAccountsChanged(userAccounts) {
  if (userAccounts.length === 0) {
    console.log("Please connect to MetaMask.");
  } else if (userAccounts[0] !== currentAccount) {
    currentAccount = userAccounts[0];
  }
}
init();
