const main = document.querySelector("main");

const onloadImgConfig = { filter: "blur(0px)", opacity: 1 };

window.addEventListener("DOMContentLoaded", () => {
  for (let prop in onloadImgConfig) {
    main.style[prop] = onloadImgConfig[prop];
  }
});
