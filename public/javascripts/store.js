let money = document.querySelector(".money");
money.addEventListener("input", displayMoney);

const storeBtn = document.getElementById("storeBtn");
let accounts = [];

function displayMoney(event) {
  let balance = document.querySelector(".balance");
  balance = balance.innerText.substring(0, balance.innerText.length - 3);
  let add_money = document.querySelector(".add_money");
  let total = document.querySelector(".total");
  let value = Number(event.target.value);
  add_money.innerHTML = value + " MJC";
  total.innerHTML = Number(balance) + value + " MJC";

  let deposit = document.querySelector(".deposit");
  let withdraw = document.querySelector(".withdraw");
  let changeWord = document.querySelectorAll(".change_word");
  let word;
  if (value < 0) {
    word = "출금";
    deposit.classList.remove("active");
    withdraw.classList.add("active");
    for (let i = 0; i < changeWord.length; i++) {
      changeWord[i].innerHTML = word;
    }
  } else {
    word = "입금";
    deposit.classList.add("active");
    withdraw.classList.remove("active");
    for (let i = 0; i < changeWord.length; i++) {
      changeWord[i].innerHTML = word;
    }
  }
}
//Sending Ethereum to an address
storeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let value = parseInt(money.value);
  let weiValue = value * 10000000000000000;
  console.log(value.toString(16));
  console.log(value);
  console.log(weiValue);
  ethereum
    .request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0],
          to: "0x0c5daef032831f9b74c88644ea9107258265b55d",
          value: "0x" + weiValue.toString(16),
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

async function init() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  console.log(accounts);
}
init();
