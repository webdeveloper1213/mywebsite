/***************** Floating inputs in the form ********** */

$(function(){
    
    var field = $('.field');
    field.on('focusout' , function(){

        if(field.val().length > 0) {
            $(this).addClass('valid')
        }else{
            $(this).removeClass('valid');
        }
    });
})



const menuIcon = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
menuIcon.addEventListener('click' , () => {
container.classList.toggle('change');
});

/**** Scrool to top */
document.querySelector(".scroll-top").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });

  /****** Respponsive Design */

  