

window.onload = init;

function init() {
let images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
    }

};

function showAnswer(e) {
    let image = e.target;
    let name = image.id;
    name = name + ".jpg";
    image.src = name;
    setTimeout(reblur, 2000, image);
};

function reblur(image) {
    let name = image.id;
    name = name + "blur.jpg";
    image.src = name;
};