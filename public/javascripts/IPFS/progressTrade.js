"use strict";

require("buffer");
const Ipfs = require("ipfs");
let userAccounts;

console.log(products);
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const reader = new window.FileReader();
const userIdx = document.getElementById("userIdx");
const sellerIdx = document.getElementById("sellerIdx");
const domContainer = document.querySelector(".inbox_chat");

async function init() {
  const chainId = await ethereum.request({ method: "eth_chainId" });
  
  userAccounts = await ethereum.request({ method: "eth_requestAccounts" });
  ethereum
    .request({ method: "eth_requestAccounts" })
    .then(handleAccountsChanged)
    .catch((err) => {
      console.error(err);
    });
  console.log();

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
  console.log(trades);
  console.dir(document);
  const waitDom = await domContainer.dispatchEvent(event);
  console.log(waitDom)
  const chatList = domContainer.querySelectorAll(".chat_list");
  console.log(chatList)
  for (var i = 0; i < chatList.length; i++) {
    chatList[i].addEventListener("click", async (e) => {
      console.log("clicked in progressTrade")
      const msgContainer = document.querySelector(".msg_history");
      const root = await myContract.getChat(e.target.id);
      console.log(root);
      let cid = root;
      while (cid) {
        let current = await ipfs.dag.get(cid);
        console.log(current);
        const prev = current.value.productPrev;
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
    })
  }
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

function handleChainChanged(_chainId) {
  console.log("changed");
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
