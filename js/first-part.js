const refs = {
  preLoad: document.querySelector(".preload-section"),
  preLoading: document.querySelector(".pre-loading"),
  sphereContainer: document.querySelector(".sphere-container"),
  kostyaSection: document.querySelector(".kostya-section"),
  blowingSymbols: document.querySelector(".blowing-symbols"),
  confetti: document.querySelector(".confetti"),
  stars: document.querySelector(".stars"),
  bdHat: document.querySelector(".bd-hat"),
  ovals: document.querySelector(".ovals"),
  blueOvalLeft: document.querySelector(".blue-oval-left"),
  blueCircle: document.querySelector(".blue-circle"),
  blueOvalRight: document.querySelector(".blue-oval-right"),
  gradient: document.querySelector(".gradient"),
  logos: document.querySelector(".logos"),
  photoFrame: document.querySelector(".photo-frame"),
};

disableElements([
  refs.kostyaSection,
  refs.confetti,
  refs.stars,
  refs.bdHat,
  refs.ovals,
  refs.blueOvalLeft,
  refs.blueCircle,
  refs.blueOvalRight,
  refs.gradient,
  refs.logos,
  refs.photoFrame,
]);

// ! first part
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
displayElement(refs.gradient, 7500);
displayElement(refs.stars, 7300);
displayElement(refs.bdHat, 7300);
displayElement(refs.ovals, 7300);
displayElement(refs.blueOvalLeft, 7300);
displayElement(refs.blueCircle, 7300);
displayElement(refs.blueOvalRight, 7300);
// * 5-th screen
displayElement(refs.logos, 9000);
changeClass(refs.gradient, "gradient", "gradient-light", 9000);
// * 6-th screen
let trigger = 1;
addListener(window, "click", firstScreenEnd, 9500);

// ! video-part


function disableElements(array) {
  for (let element of array) {
    element.classList.add("removed");
  }
}
function displayElement(element, timeOut) {
  return setTimeout(removeClass, timeOut);

  function removeClass() {
    return element.classList.remove("removed");
  }
}
function removeElement(element, initialClass, timeOut) {
  return setTimeout(changeClass, timeOut);

  function changeClass() {
    return element.classList.replace(initialClass, "removed");
  }
}
function changeClass(element, initialClass, finalClass, timeOut) {
  return setTimeout(chngClass, timeOut);

  function chngClass() {
    return element.classList.replace(initialClass, finalClass);
  }
}
function sphere() {
  return setTimeout(sphereCreation, 2000);
  function sphereCreation() {
    refs.sphereContainer.firstElementChild.classList.add("sphere");
  }
}
function addListener(element, event, callback, timeOut) {
  return setTimeout(add, timeOut);
  function add() {
    element.addEventListener(event, callback);
  }
}
function firstScreenEnd() {
  if (trigger === 1) {
    trigger += 1;
    refs.logos.children[0].classList.add("first-logo-mov");
    refs.logos.children[1].classList.add("second-logo-mov");
    refs.logos.children[2].classList.add("third-logo-mov");
    refs.logos.children[3].classList.add("fourth-logo-mov");
    refs.logos.children[4].classList.add("fifth-logo-mov");
    refs.logos.children[5].classList.add("sixth-logo-mov");
    removeElement(refs.logos, "logos", 960);
    displayElement(refs.photoFrame, 100);
    return;
  }
  refs.blueOvalLeft.classList.add("oval-left-fall");
  refs.blueCircle.classList.add("circle-fall");
  refs.blueOvalRight.classList.add("oval-right-fall");
  removeElement(refs.ovals, "ovals", 960);
  return window.removeEventListener("click", firstScreenEnd);
}
