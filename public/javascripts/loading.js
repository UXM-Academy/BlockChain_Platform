const loadingSpanner = document.querySelector(".spanner");
const loadingOverlay = document.querySelector(".overlay");
function onLoading() {
  loadingSpanner.classList.add("show");
  loadingOverlay.classList.add("show");
}
function offLoading() {
  loadingSpanner.classList.remove("show");
  loadingOverlay.classList.remove("show");
}
