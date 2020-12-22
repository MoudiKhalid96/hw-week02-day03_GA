function createImage(){

    let photo = document.createElement('img');
    photo.setAttribute('src', 'https://source.unsplash.com/random');
    photo.style = 'width: 20% ; height: 20% ; margin: 2.5%;';

    document.body.appendChild(photo);
}//end of createImage function

