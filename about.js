const preloader = document.querySelector(".preloader");
window.addEventListener("load" , () =>{
    preloader.style.display = "none";
})




ScrollReveal({
    reset:true,
    duration:900,
    distance: "100px"

});


ScrollReveal().reveal('.header' );

ScrollReveal().reveal('.iam , .journey , .hobby , .aspire , .connect' ,{ delay: 200 , duration: 700, origin:'left'} );

ScrollReveal().reveal('.fotter-row1',{ delay:100, duration: 700 , distance:"50px" , origin:'bottom', interval:100} );

