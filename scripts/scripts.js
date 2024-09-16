// okay so a lot of this is not optimal code but it is my first JS attempt

// this one took about 2 hours :) and it still isn't exactly what I want
// I'd like the transitions to be smoother but thats for another time
var hero_images = [
    '../Images/dog_grooming_bath.jpg',
    '../Images/dog_grooming_spa.jpg',
    '../Images/dog_grooming_haircut.jpg'
];

window.addEventListener("load", heroImageCycle);

function heroImageCycle() {
var container = document.getElementById('home-page-header');

setInterval(function() {
    container.style.setProperty("--background-image", `url(${hero_images[1]})`);
    hero_images.push(hero_images.shift());
}, 10000);
}