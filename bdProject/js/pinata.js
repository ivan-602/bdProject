const image = document.querySelector(".pinata");

image.addEventListener("click", onImageClick);

function onImageClick() {
  setTimeout(stopGif, 2300);
  return image.setAttribute("src", "./img/90420-pinata 1.gif");
}
function stopGif() {
  return image.setAttribute("src", "./img/pinata .jpg");
}
