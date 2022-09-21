//  Slider  //
(function(){
    const sliders = [...document.querySelectorAll('.slider_body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));

    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider_body-show').
        dataset.id);

        value = currentElement;
        value += change;
        
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[currentElement-1].classList.toggle('slider_body-show');
        sliders[value-1].classList.toggle('slider_body-show');
    }
})()

// Animacion al scrollear en Home//
window.addEventListener('scroll', function(){
    let home1 = document.getElementById('home1');
    let posicionObj1 = home1.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/0.7;

    if(posicionObj1 < tamañoPantalla){
        home1.style.animation = 'movimiento 1s ease'
    }
})

window.addEventListener('scroll', function(){
    let home2 = document.getElementById('home2');
    let posicionObj1 = home2.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/0.7;

    if(posicionObj1 < tamañoPantalla){
        home2.style.animation = 'movimiento 1.5s ease'
    }
})

window.addEventListener('scroll', function(){
    let home3 = document.getElementById('home3');
    let posicionObj1 = home3.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/0.7;

    if(posicionObj1 < tamañoPantalla){
        home3.style.animation = 'movimiento 2.5s ease'
    }
})

window.addEventListener('scroll', function(){
    let home4 = document.getElementById('home4');
    let posicionObj1 = home4.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/0.7;

    if(posicionObj1 < tamañoPantalla){
        home4.style.animation = 'movimiento 1.6s ease'
    }
})
