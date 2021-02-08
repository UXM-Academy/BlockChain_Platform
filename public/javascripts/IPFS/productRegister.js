require("buffer");
const Ipfs = require("ipfs");
let userAccounts;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const reader = new window.FileReader();

const registerForm = document.getElementById("registerServiceForm");
const registerSend = document.getElementById("registerSendButton");
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
    console.log(Ipfs);
    ipfs = await Ipfs.create();

    console.log(ipfs);
  } else {
    console.log("이미 있음");
  }

  registerSend.addEventListener("click", handleSendClick);
}
async function handleSendClick() {
  console.dir(registerForm);
  let val = -1;
  if (registerForm[1].checked) {
    val = 0;
  } else if (registerForm[2].checked) {
    val = 1;
  } else {
    val = 2;
  }
  const sellerIdx = parseInt(registerForm[7].value);
  const productRoot = await myContract.getCategoryRoot(val);
  const sellerRoot = await myContract.getSeller(sellerIdx);
  console.log(productRoot);
  console.log(reader);
  const file = registerForm[0].files[0];
  console.log(file);
  reader.readAsArrayBuffer(file);
  console.log(reader);
  reader.onloadend = async () => {
    const filebuffer = Buffer.from(reader.result);
    const productCid = await ipfs.dag.put({
      image: filebuffer,
      title: registerForm[4].value,
      price: registerForm[5].value,
      explanation: registerForm[6].value,
      sellerIdx: sellerIdx,
      category: val,
      productPrev: productRoot,
      sellerPrev: sellerRoot,
    });
    console.log(productCid.toString());
    const tx = await myContract.setSetting(
      val,
      sellerIdx,
      productCid.toString()
    );
    const receipt = await tx.wait();
    const a = await myContract.getCategoryRoot(val);
    const b = await myContract.getSeller(sellerIdx);
    console.log(a);
    console.log(b);
  };
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
