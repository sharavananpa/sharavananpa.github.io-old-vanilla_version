function intro() {
    document.getElementById('sidebar').classList.remove('init');
    document.getElementById('main-content').classList.remove('init');
    var color = setInterval(changeColor, 500);
    setTimeout(() => {
        clearInterval(color);
    }, 1000);
    console.log('Intro!')
}

var color = 4;
var prev = 4;

function changeColor() {
    document.body.classList.remove("theme-" + prev);
    document.body.classList.add("theme-" + ++color);
    console.log("Color changed! Theme-" + color);
    prev = color;
    if(color==7)
        color = 0;
}

function darkMode() {
    document.body.classList.toggle('dark');
    console.log("Toggle dark mode!");
}