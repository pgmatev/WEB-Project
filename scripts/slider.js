const Slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 1;
const size = sliderImages[0].clientWidth;

Slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', function(){
    if(counter >= sliderImages.length) return;
    Slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    Slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', function(){
    if(counter <= 0) return;
    Slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    Slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
});

Slider.addEventListener('transitionend', function(){
    console.log(counter);
    if(sliderImages[counter].id === 'lastClone'){
        Slider.style.transition = "none";
        counter = sliderImages.length - 2;
        Slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(sliderImages[counter].id === 'firstClone'){
        Slider.style.transition = "none";
        counter = sliderImages.length - counter;
        Slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});