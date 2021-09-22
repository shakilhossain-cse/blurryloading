const text = document.querySelector('h1');
const bg = document.querySelector('.img-container');
let load = 0;

const intervel = setInterval(bulring, 30);

function bulring(){
    load++
    if (load > 99) {
        clearInterval(intervel);
    }
    text.innerText = load+'%';
    text.style.opacity = scale(load , 0 , 100 , 1, 0)
    bg.style.filter = `blur(${scale(load , 0 , 100 , 40, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}