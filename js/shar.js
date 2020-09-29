function showContent(id) {
    document.getElementById('main-content').innerHTML = document.getElementById(id).innerHTML;
}

var color = 0;

function changeColor() {
    document.body.classList.replace(document.body.classList[0], "theme-" + ++color);
    if(color==8)
        color = 0;
}

function darkMode() {
    if(document.body.classList[1] != "dark") {
        document.body.classList.add('dark');
    }
    else {
        document.body.classList.remove('dark');
    }
}