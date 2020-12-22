let catImage = document.getElementsByTagName('img')[0];

let catURL = catImage.src;

catImage.style.position = "absolute";
catImage.style.left = "0 px";


// function catWalk(){
//     catImage.style.position = "relative";
//     catImage.style.left = "10 px";
// }

function catWalk(){

    let pos = '0px';
   
    pos++;
    catImage.style.left = pos; 

    setInterval(function(){
        catImage.style.position = "absolute";
        catImage.style.left = '10 px';

    }, 10);




    /*
    let pos = 0%;
   
    pos += 1%; 
    elem.style.left = pos; 
    */
}




