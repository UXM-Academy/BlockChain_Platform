// let modal = document.querySelectorAll(".modal");
// let trigger = document.querySelectorAll(".trigger");
// let closeButton = document.querySelectorAll(".close-button");
// let cancelButton = document.querySelectorAll(".cancel");
// let okButton = document.querySelectorAll(".ok");
// console.log(trigger.length);

// console.log(modal);

// function toggleModal(event) {
//   // modal.classList.toggle("show-modal");
//   console.log(event.target); //etc_send_btn
//   if (event.target.classList.contains("acceptApproval")) {
//     modal[0].classList.replace("modal", "show-modal");
//     console.log("a");
//   } else {
//     modal[1].classList.replace("modal", "show-modal");
//     console.log("b");
//   }
// }

// function cancelToggle(event) {
//   console.log(event.target);
//   // modal.classList.toggle("show-modal"); //input.ok etc_close_btn
//   if (event.target.classList.contains("acceptApproval")) {
//     modal[0].classList.replace("show-modal", "modal");
//   } else {
//     modal[1].classList.replace("show-modal", "modal");
//   }
//   console.log(trigger);
//   console.log(modal);
// }

// function windowOnClick(event) {
//   if (event.target === modal) {
//     toggleModal();
//   }
// }

// if (trigger.length !== 0) {
//   trigger[0].addEventListener("click", toggleModal);
//   trigger[1].addEventListener("click", toggleModal);
// }
// // if (closeButton.length !== 0) {
// //   closeButton[0].addEventListener("click", cancelToggle);
// //   closeButton[1].addEventListener("click", cancelToggle);
// // }

// for (let i = 0; i < cancelButton.length; i++) {
//   closeButton[i].addEventListener("click", cancelToggle);
//   cancelButton[i].addEventListener("click", cancelToggle);
//   okButton[i].addEventListener("click", cancelToggle);
// }
// // cancel.addEventListener("click", cancelToggle);
// window.addEventListener("click", windowOnClick);
