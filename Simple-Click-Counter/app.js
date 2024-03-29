const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const value = document.getElementById("value");

count = 0;

decrease.addEventListener("click", () => {
  count--;
  value.innerHTML = count;
  setTextColor();
});

increase.addEventListener("click", () => {
  count++;
  value.innerHTML = count;
  setTextColor();
});

reset.addEventListener("click", () => {
  count = 0;
  value.innerHTML = count;
  setTextColor();
});

setTextColor = () => {
  console.log("set the color ");
  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
};
