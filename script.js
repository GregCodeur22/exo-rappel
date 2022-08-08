const btns = document.querySelectorAll(".btn");
const res = document.querySelector(".result");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
console.log(clear);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    res.textContent += e.target.id;
  });
});

equal.addEventListener("click", (e) => {
  res.textContent = eval(res.textContent);
});

clear.addEventListener("click", () => {
  res.textContent = "";
});
