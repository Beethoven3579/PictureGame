
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
};
