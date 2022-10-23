const refs = {
  preLoad: document.querySelector(".preload-section"),
  preLoading: document.querySelector(".pre-loading"),
  sphereContainer: document.querySelector(".sphere-container"),
  kostyaSection: document.querySelector(".kostya-section"),
  blowingSymbols: document.querySelector(".blowing-symbols"),
  confetti: document.querySelector(".confetti"),
  stars: document.querySelector(".stars"),
  bdHat: document.querySelector(".bd-hat"),
  blueOvalLeft: document.querySelector(".blue-oval-left"),
  blueCircle: document.querySelector(".blue-circle"),
  blueOvalRight: document.querySelector(".blue-oval-right"),
};

refs.kostyaSection.classList.add("removed");
refs.confetti.classList.add("removed");
refs.stars.classList.add("removed");
refs.bdHat.classList.add("removed");
refs.blueOvalLeft.classList.add("removed");
refs.blueCircle.classList.add("removed");
refs.blueOvalRight.classList.add("removed");



// * 1-st screen
removeElement(refs.preLoading, "pre-loading", 2200);
// * 2-nd screen
sphere();
removeElement(refs.sphereContainer, "sphere-container", 3900);
removeElement(refs.preLoad, "preload-section", 3900);
// * 3-d screen
displayElement(refs.kostyaSection, 3900);
removeElement(refs.blowingSymbols, "blowing-symbols", 7300);
// * 4-th screen
displayElement(refs.confetti, 7500);
displayElement(refs.stars, 7300);
displayElement(refs.bdHat, 7300);
displayElement(refs.blueOvalLeft, 7300);
displayElement(refs.blueCircle, 7300);
displayElement(refs.blueOvalRight, 7300);


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
function displayElement(element, timeOut) {
  return setTimeout(removeClass, timeOut);

  function removeClass() {
    return element.classList.remove("removed");
  }
}
