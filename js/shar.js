function showContent(id) {
    document.getElementById('main-content').innerHTML = document.getElementById(id).innerHTML;
    console.log("Content changed!");
}

var color = 1;
var prev = 1;

function changeColor() {
    document.body.classList.remove("theme-" + prev);
    document.body.classList.add("theme-" + ++color);
    console.log("Color changed!");
    prev = color;
    if(color==8)
        color = 0;
}

function darkMode() {
    document.body.classList.toggle('dark');
    console.log("Toggle dark mode!");
}