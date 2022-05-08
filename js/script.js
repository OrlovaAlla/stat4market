document.addEventListener('DOMContentLoaded', function(){

    let burger = document.querySelector('.mobile-menu');
    let nav = document.querySelector('.nav');

     burger.addEventListener("click", function (){
        console.log('клик');
        nav.classList.toggle("open");
      });

});