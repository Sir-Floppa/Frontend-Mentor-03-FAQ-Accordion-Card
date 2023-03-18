const openAccord = (e) => {
  e.target.parentNode.children[1].classList.toggle('hide');
};

document.querySelectorAll("button")
  .forEach(btn => btn.addEventListener("click", openAccord));
