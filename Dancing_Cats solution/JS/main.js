let catImage = document.getElementsByTagName('img')[0];

catImage.style.position = "absolute";
var moveBy = 1;

function catWalk() {
    setTimeout(() => {
        if (moveBy == "80") {
            return;
        } else {
            catImage.style.left = moveBy + "%";
            moveBy++;
            catWalk();
        }
    }, 50)
}