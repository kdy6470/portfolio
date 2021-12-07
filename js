// 메뉴 슬라이드
const slideTab = document.querySelector('#slide-tab');
const slideMenu = document.querySelector('#slide-menu');


  slideTab.addEventListener('click',()=>{
    if(slideTab.style.marginRight = '0vw'){
      slideMenu.style.marginRight = "20vw";
      slideTab.style.marginRight = "20vw";
    }else {
      slideMenu.style.marginRight = "-20vw";
      slideTab.style.marginRight = "-20vw";
    }
  });
