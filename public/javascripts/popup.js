let modal = document.querySelectorAll(".modal");
let trigger = document.querySelectorAll(".trigger");
let closeButton = document.querySelectorAll(".close-button");
let cancelButton = document.querySelectorAll(".cancel");
let okButton = document.querySelectorAll(".ok");
document.body.classList.contains;

//console.log(modal);

function toggleModal(event) {
  // modal.classList.toggle("show-modal");
  console.log(event.target);
  if (event.target.classList.contains("etc_send_btn")) {
    modal[0].classList.replace("modal", "show-modal");
    console.log("a");
  } else {
    modal[1].classList.replace("modal", "show-modal");
    console.log("b");
  }
}

function cancelToggle(event) {
  console.log(event.target);
  // modal.classList.toggle("show-modal");
  if (event.target.classList.contains("request_close_btn")) {
    modal[0].classList.replace("show-modal", "modal");
  } else {
    modal[1].classList.replace("show-modal", "modal");
  }
  console.log(trigger);
  console.log(modal);
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
//  function getIndex(event) {
//    console.log("test");

// }

//okButton[0].addEventListener("click", getIndex)


trigger[0].addEventListener("click", toggleModal);
trigger[1].addEventListener("click", toggleModal);
closeButton[0].addEventListener("click", cancelToggle);
closeButton[1].addEventListener("click", cancelToggle);

for (let i = 0; i < cancelButton.length; i++) {
  closeButton[0].addEventListener("click", cancelToggle);
  cancelButton[i].addEventListener("click", cancelToggle);
  okButton[i].addEventListener("click", cancelToggle);
  //okButton[i].addEventListener("click", getIndex);
}
// cancel.addEventListener("click", cancelToggle);
window.addEventListener("click", windowOnClick);
