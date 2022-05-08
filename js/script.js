document.addEventListener('DOMContentLoaded', function(){

    let burger = document.querySelector('.mobile-menu');
    let nav = document.querySelector('.nav');

    let abouth2 = document.querySelector('.about__h2');
    let title_def = abouth2.textContent;

     burger.addEventListener("click", function (){
        nav.classList.toggle("open");
      });

    window.addEventListener('resize', function(){
        if(this.window.matchMedia("(max-width: 1020px)").matches) {
            console.log("меньше 1020");
            abouth2.innerHTML="Как работает модуль Аналитика по API для Wildberries?";
        } else {
            abouth2.innerHTML= title_def;
        }
        
    });

});