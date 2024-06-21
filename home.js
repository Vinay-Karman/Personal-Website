if (!localStorage.getItem('visited')) {
    window.location.href = 'index.html';
} else {
    localStorage.removeItem('visited');
}



ScrollReveal({
    reset:true,
    duration:900,
    distance:'100px'

});


ScrollReveal().reveal('.herosec' , { origin:'top' , duration:1600} );

ScrollReveal().reveal('.header',{duration:1200 , delay:700} );

ScrollReveal().reveal('.clgnameintro' ,{ delay: 700 , origin:'left' , distance:'100px' });

ScrollReveal().reveal('.weltxt',{ delay:100, duration: 700,  distance:'100px' , origin:'left'} );

ScrollReveal().reveal('.profimg',{ delay:100, duration: 700,  distance:'100px' , origin:'bottom'} );

ScrollReveal().reveal('.techused',{ delay:100, duration: 700,  distance:'100px' , origin:'left'} );

ScrollReveal().reveal('.inspiration',{ delay:100, duration: 700,  distance:'100px' , origin:'right'} );

ScrollReveal().reveal('.quote',{ delay:100, duration: 1000,  distance:'100px' , origin:'bottom'} );



ScrollReveal().reveal('footer div',{ delay:100, duration: 700,  distance:'50px' , origin:'bottom', interval:100} );





