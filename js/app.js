const openAccord = (e) => {
  document.querySelectorAll(".accordion").forEach((el) => {
    if(el != e.target.parentNode) {
      el.querySelector("button").classList.remove("btn-active");
      el.querySelector("button").querySelector("img").classList.remove("flip");
      el.querySelector("p").classList.add("hide");
    }
  });

  e.target.parentNode.querySelector("p").classList.toggle("hide");
  e.target.querySelector("img").classList.toggle("flip");
  e.target.classList.toggle("btn-active");
};

document
  .querySelectorAll("button")
  .forEach((btn) => btn.addEventListener("click", openAccord));
