const buyBtn = document.getElementById("buyBtn");

// 임시 param: price
async function setTrade(_price, _userAccounts) {
  const tx = await myContract.setTrade(
    "0xC7C79EF82108A661788f43D4bFe845A2d580B3C2",
    _price,
    "talentId",
    _userAccounts[0],
    3
  );
  const receipt = await tx.wait();
}

async function getTrade(_trID) {
  const value = await myContract.getTrade(_trID);
  // const receipt = await value.wait();
  console.log(value);
}

function init() {
  buyBtn.addEventListener("click", function () {
    console.log("loading");
    setTrade(1, userAccounts);
    console.log("complete");
  });
  console.log("getTrade()");
  getTrade(0);
}
init();
