function handleChange(e) {
  console.log(e.target.value);
}
console.log("msgChange");
const value = document.getElementById("tradeIdx");
value.oninput = () => {
  console.log("change");
};
console.dir(value);
