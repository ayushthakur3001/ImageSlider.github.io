const slide = document.querySelector('.slider');
const Images = document.querySelectorAll('.slider img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = Images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click',()=>{
    if (counter >= Images.length -1)return ;
    slide.style.transition = " transform 1s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0 ) return;
    slide.style.transition = " transform 1s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


slide.addEventListener('transitionend', () =>{
    if(Images[counter].id === 'lastClone'){
        slide.style.transition = " none";
        counter = Images.length -2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if(Images[counter].id === 'firstClone'){
        slide.style.transition = " none";
        counter = Images.length -counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});