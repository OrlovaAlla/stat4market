document.addEventListener('DOMContentLoaded', function(){

    let burger = document.querySelector('.mobile-menu');
    let nav = document.querySelector('.nav');

    const mQuery = window.matchMedia("(max-width: 768px)");
    let abouth2 = document.querySelector('.about__h2');
    let title_def = abouth2.textContent;

     burger.addEventListener("click", function (){
        nav.classList.toggle("open");
      });


    // замена содержимого заголовка второй секции сайта  
    function handleTabletChange(e) {
        if(mQuery.matches) {            
            abouth2.innerHTML="Как работает модуль Аналитика по API для Wildberries?";
        } else if (window.matchMedia("(min-width: 769px)").matches) {            
            abouth2.innerHTML= title_def;
        }
    }    
   
    mQuery.addListener(handleTabletChange);
    handleTabletChange(mQuery);
});