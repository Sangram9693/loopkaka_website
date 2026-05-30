document.addEventListener("contextmenu", (event) => {
  if (event.target.closest("img")) {
    event.preventDefault();
  }
});

document.querySelectorAll("img").forEach((image) => {
  image.setAttribute("draggable", "false");
});
