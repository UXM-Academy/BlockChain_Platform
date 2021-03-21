let userAccounts;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const buyBtn = document.getElementById("buyBtn");
const userIdx = document.getElementById("userIdx");
const sellerIdx = document.getElementById("sellerIdx");
const productCid = document.getElementById("cid").value;
// const productPrice = document.getElementById("price").innerText;
const domContainer = document.querySelectorAll(".serviceInfo");

console.log(buyBtn);
// 임시 param: price

async function getEtherValue() {
  let response = await fetch("https://api.upbit.com/v1/ticker?markets=KRW-ETH");
  let eth = await response.json();
  return eth;
}

async function setTrade(_price, _userAccounts) {
  console.log("progress1");
  console.log(_userAccounts[0]);
  console.log(parseInt(userIdx.value));
  console.log(_price);
  console.log(domContainer[2].innerHTML);

  let ethValue = await getEtherValue();
  console.log(ethValue);
  let nowEthValue = ethValue[0].trade_price;
  console.log(nowEthValue);

  //가격 불러와서 나누기 (1900000은 예시)
  const productPrice = (
    domContainer[2].innerHTML / ethValue[0].trade_price
  ).toString();

  let overrides = {
    value: ethers.utils.parseEther(productPrice),
  };
  //var string = ethers.utils.formatEther(overrides);
  //console.log(string)
  //let pp = overrides.toHexString(16);
  //console.log(pp);
  console.log(productPrice);
  const tx = await myContract.setTrade(
    "0x8E3e6B6EB1e392901Cfc3eD7C0adAc6522CE7507",
    parseInt(userIdx.value),
    _price,
    "talentId",
    _userAccounts[0],
    3,
    productCid,
    parseInt(sellerIdx.value),
    overrides
  );
  onLoading();
  const receipt = await tx.wait();
  offLoading();
  console.log(tx);
  console.log("complete");
}

async function getTrade(_trID) {
  const value = await myContract.getTrade(_trID);
  // const receipt = await value.wait();
  console.log(value);
}

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

  buyBtn.addEventListener("click", function () {
    console.log("loading");
    setTrade(1, userAccounts);
  });
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
  // Access the decentralized web!
}

function handleChainChanged(_chainId) {
  console.log("changed");
}

let currentAccount = null;
// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(userAccounts) {
  if (userAccounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log("Please connect to MetaMask.");
  } else if (userAccounts[0] !== currentAccount) {
    currentAccount = userAccounts[0];
    // Do any other work!
  }
}

init();
