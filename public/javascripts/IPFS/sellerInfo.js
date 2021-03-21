"use strict";

require("buffer");
const Ipfs = require("ipfs");

let userAccounts;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const reader = new window.FileReader();
const domContainer = document.getElementById("productCards");
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

  const sellerInfoIdx = document.getElementById("sellerInfoIdx");
  const sellerIdx = parseInt(sellerInfoIdx.value);

  const sellerRoot = await myContract.getSeller(sellerIdx);
  console.log(sellerRoot);
  let cid = sellerRoot;
  while (cid) {
    const current = await ipfs.dag.get(cid);
    console.log(current);
    const prev = current.value.sellerPrev;
    products.push(current.value);
    if (prev != "") {
      cid = prev;
    } else {
      break;
    }
  }
  console.log(products);
  domContainer.dispatchEvent(event);
}

function startApp(provider) {
  if (provider.provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  } else {
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
