const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const count = document.getElementById("count");

count.innerHTML = 0;
incrementBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  count.innerHTML++;
});
decrementBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  count.innerHTML--;
});
