let setDark = document.querySelector("body");
let buttonDark = document.querySelector(".header__moon");
let logo = document.querySelector(".header__logo");
let sectionArticleIllustration = document.querySelectorAll(
  ".main__section__article"
);
let sectionArticleIllustrationImg = document.querySelectorAll(
  ".main__section__article img"
);
let bg__image = document.querySelector(".bg_img");
let audio = document.querySelector("#hidden");
let playSound = () => {
  audio.play();
};

let audioStop = () => {
  audio.pause();
};

buttonDark.addEventListener("click", () => {
  setDark.classList.toggle("bg__dark");
  if (setDark.classList.contains("bg__dark")) {
    buttonDark = document.querySelector(".myImg").src =
      "./image/light-mode.png";
    logo.style.backgroundColor = "white";
    bg__image.style.visibility = "hidden";
    playSound();
    // for (let i = 0; i < sectionArticleIllustration.length; i++) {
    //   sectionArticleIllustration[i].style.backgroundColor = "lightgray";
    // }
    // for (let i = 0; i < sectionArticleIllustrationImg.length; i++) {
    //   sectionArticleIllustrationImg[i].style.filter = "brightness(2)";
    // }
  } else {
    buttonDark = document.querySelector(".myImg").src =
      "./image/icons8-symbole-de-la-lune-30.png";
    logo.style.backgroundColor = "transparent";
    bg__image.style.visibility = "visible";
    audioStop();
    // for (let i = 0; i < sectionArticleIllustration.length; i++) {
    //   sectionArticleIllustration[i].style.backgroundColor = "transparent";
    // }
  }
});
