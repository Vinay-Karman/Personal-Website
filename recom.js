const preloader = document.querySelector(".preloader");
window.addEventListener("load" , () =>{
    preloader.style.display = "none";
})






ScrollReveal({
    reset:true,
    duration:900,
    distance:'100px'

});

ScrollReveal().reveal('.header',{duration:1200 , delay:700} );

ScrollReveal().reveal('h2 ',{ delay:100, duration: 700,  distance:'50px' , origin:'left'} );

ScrollReveal().reveal('.yt1 ',{ delay:100, duration: 700,  distance:'100px' , origin:'left', interval:100} );

ScrollReveal().reveal('.yt1 img',{ delay:400, duration: 400,  distance:'100px' , origin:'left'} );

ScrollReveal().reveal('.yt1 p',{ delay:400, duration: 400,  distance:'100px' , origin:'right'} );


ScrollReveal().reveal('.roww  ',{ delay:200, duration: 700,  distance:'100px' , origin:'left', interval:100 } );

ScrollReveal().reveal(' .music-template',{ delay:50, duration: 700,  distance:'100px' , origin:'right', interval:100 } );


ScrollReveal().reveal('.fotter-row1',{ delay:100, duration: 700,  distance:'50px' , origin:'bottom', interval:100} );



