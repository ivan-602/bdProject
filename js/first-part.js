const refs = {
  preLoading: document.querySelector(".pre-loading"),
  sphereContainer: document.querySelector(".sphere-container"),
};
removeElement(refs.preLoading, "pre-loading", 2200);

sphere();
removeElement(refs.sphereContainer, "sphere-container", 3900);

function removeElement(element, initialClass, timeOut) {
  return setTimeout(changeClass, timeOut);

  function changeClass() {
    return element.classList.replace(initialClass, "removed");
  }
}
function sphere() {
  return setTimeout(sphereCreation, 2000);
  function sphereCreation() {
    refs.sphereContainer.firstElementChild.classList.add("sphere");
  }
}
