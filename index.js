ScrollReveal().reveal('.container' ,{ delay:600 , duration:700} );




const words = [ 'स्वागत है' , 'வணக்கம்' , 'হ্যালো' , 'ഹലോ' ,'ہیلو' , 'హలో' ,'ନମସ୍କାର' , 'ನಮಸ್ಕಾರ' ,'ਸਤ ਸ੍ਰੀ' , 'ਅਕਾਲ' , '' ]


const display = document.querySelector(".container")

let i = 0;

setTimeout(() => {
    const myTimeout = setInterval(() =>{
        if ( i <=10){
            display.innerHTML = words[i];
            i++;
        }
        if( i>10){
            clearInterval(myTimeout);
        }

    } , 150);
myTimeout();

} , 2000);



document.addEventListener("DOMContentLoaded", function() {
    const animationDuration = 3800; 
    setTimeout(() => {
        localStorage.setItem('visited', 'true');
        window.location.href = 'home.html';
    }, animationDuration);
});

