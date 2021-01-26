let myContract;
let userAccounts;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
/*****************************************/
/* Detect the MetaMask Ethereum provider */
/*****************************************/
// import detectEthereumProvider from "@metamask/detect-provider";

// this returns the provider, or null if it wasn't detected
async function init() {
  console.log(`provider`);
  console.log(provider);
  console.log(`signer`);
  console.log(signer);
  /**********************************************************/
  /* Handle chain (network) and chainChanged (per EIP-1193) */
  /**********************************************************/

  const chainId = await ethereum.request({ method: "eth_chainId" });
  console.log(chainId);
  handleChainChanged(chainId);

  ethereum.on("chainChanged", handleChainChanged);

  /***********************************************************/
  /* Handle user accounts and accountsChanged (per EIP-1193) */
  /***********************************************************/
  userAccounts = await ethereum.request({ method: "eth_requestAccounts" });
  console.log(`userAccounts`);
  console.log(userAccounts);
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
}

function startApp(provider) {
  // If the provider returned by detectEthereumProvider is not the same as
  // window.ethereum, something is overwriting it, perhaps another wallet.
  if (provider.provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  } else {
    const contractAddress = "0x6a2F3418e4bb9415dE3c5049BC7942baEF24Bcd0";
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
document.getElementById("connectButton", connect);

// While you are awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can click to initiate the request.
// MetaMask will reject any additional requests while the first is still
// pending.
function connect() {
  ethereum
    .request({ method: "eth_requestAccounts" })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log("Please connect to MetaMask.");
      } else {
        console.error(err);
      }
    });
}

init();
