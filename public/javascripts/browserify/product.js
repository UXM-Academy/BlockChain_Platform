require("buffer");

let myContract;
let userAccounts;
let ipfs;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const reader = new window.FileReader();

const categoryTitle = document.getElementById("categoryTitle");
async function init() {
  /**********************************************************/
  /* Handle chain (network) and chainChanged (per EIP-1193) */
  /**********************************************************/

  const chainId = await ethereum.request({ method: "eth_chainId" });

  /***********************************************************/
  /* Handle user accounts and accountsChanged (per EIP-1193) */
  /***********************************************************/
  userAccounts = await ethereum.request({ method: "eth_requestAccounts" });
  ethereum
    // .request({ method: "eth_accounts" })
    .request({ method: "eth_requestAccounts" })
    .then(handleAccountsChanged)
    .catch((err) => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });
  console.log();
  // Note that this event is emitted on page load.
  // If the array of accounts is non-empty, you're already
  // connected.
  ethereum.on("accountsChanged", handleAccountsChanged);
  if (provider) {
    startApp(provider); // Initialize your app
  } else {
    console.log("Please install MetaMask!");
  }

  if (typeof ipfs !== "null") {
    ipfs = await Ipfs.create({ repo: "ipfs-" + Math.random() });
    console.log(ipfs);
  } else {
    console.log("이미 있음");
  }
  let val;
  if (categoryTitle.innerText == "디자인") {
    val = 0;
  } else if (categoryTitle.innerText === "IT/프로그래밍") {
    val = 1;
  } else {
    val = 2;
  }

  const root = await myContract.getCategoryRoot(val);
  console.log(root);
  let result = [];
  let cid = root;
  while (cid) {
    const current = await ipfs.dag.get(cid);
    const prev = current.value.prev;
    result.push(current.value);
    if (prev != "") {
      cid = prev;
    } else {
      break;
    }
  }
  console.log(result);
}

const traversePosts = async (cid) => {
  const result = [];
  while (cid) {
    const current = await ipfs.dag.get(cid);
    const prev = current.value.prev;
    result.push(current.value);
    if (prev != "") {
      cid = prev;
    } else {
      return result;
    }
  }
};

async function getCategoryRoot(_idx) {
  const value = await myContract.getCategoryRoot(_idx);
  // const receipt = await value.wait();
  return value;
}

function startApp(provider) {
  // If the provider returned by detectEthereumProvider is not the same as
  // window.ethereum, something is overwriting it, perhaps another wallet.
  if (provider.provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  } else {
    const contractAddress = "0x64cBAED4738bf0f218410A3f3B8c68907b19d0c7";
    // myContract = new web3js.eth.Contract(abi, contractAddress);
    myContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log(myContract);
  }

  // Access the decentralized web!
}

function handleChainChanged(_chainId) {
  console.log("changed");
  // We recommend reloading the page, unless you must do otherwise
  // window.location.reload();
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

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

// You should only attempt to request the user's accounts in response to user
// interaction, such as a button click.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account(s), you should encourage the user
// to initiate the attempt.

init();
