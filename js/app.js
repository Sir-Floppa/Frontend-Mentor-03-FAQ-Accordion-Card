const openAccord = (e) => {
  e.target.parentNode.querySelector('p').classList.toggle('hide');
  e.target.querySelector('img').classList.toggle('flip');
  e.target.classList.toggle('btn-active');
};

document.querySelectorAll("button")
  .forEach(btn => btn.addEventListener("click", openAccord));
