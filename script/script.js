let setDark = document.querySelector("body");
let buttonDark = document.querySelector(".header__moon");
let logo = document.querySelector(".header__logo");
let sectionArticleIllustration = document.querySelectorAll(".main__section__article");
let sectionArticleIllustrationImg = document.querySelectorAll(".main__section__article img");
let bg__image = document.querySelector(".bg_img")
let audio = document.createElement("audio")
// audio.innerHTML = `<audio controls autoplay>
//                         <source src="male-snore.mp3" type="audio/mpeg">
//                         Your browser does not support the audio element.
//                         </audio>`
// buttonDark.style.cursor = "pointer"

buttonDark.addEventListener("click", () => {
  setDark.classList.toggle("bg__dark");
  
  if(setDark.classList.contains("bg__dark")){
    
    buttonDark = document.querySelector(".myImg").src = "./image/light-mode.png";
    logo.src = "./image/logo1.svg"
    bg__image.style.visibility = "hidden"
    for(let i = 0; i < sectionArticleIllustration.length; i++){
      sectionArticleIllustration[i].style.backgroundColor = "#212121"
      sectionArticleIllustration[i].style.boxShadow = "white 0px 1px 7px"
    }
    for(let i = 0; i < sectionArticleIllustrationImg.length; i++){
      sectionArticleIllustrationImg[i].style.backgroundColor = "white"
      sectionArticleIllustrationImg[i].style.borderRadius = "15px"
    }
    } else{
    buttonDark = document.querySelector(".myImg").src = "./image/icons8-symbole-de-la-lune-30.png";
    logo.style.backgroundColor = "transparent";
    logo.src = "./image/logo.svg"
    bg__image.style.visibility = "visible"
    for(let i = 0; i < sectionArticleIllustration.length; i++){
      sectionArticleIllustration[i].style.backgroundColor = "transparent"
      sectionArticleIllustration[i].style.boxShadow = ""
    }
  
  }  
});






