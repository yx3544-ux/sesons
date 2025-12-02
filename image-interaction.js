/*
Changing Seasons Image Color
*/

let images = document.querySelectorAll('main img');
console.log(images);

function grayscale() {
  // images[0].style.filter = 'grayscale(100%)'; // make each image gray
  // images[1].style.filter = 'grayscale(100%)';
  // images[2].style.filter = 'grayscale(100%)';
  // images[3].style.filter = 'grayscale(100%)';

  for (let i = 0; i < images.length; i++) {
    images[i].style.filter = 'grayscale(100%)'; // make each image gray
  }

  this.style.filter = 'grayscale(0%)'; // keep current image color
  // in event handlers, "this" refers to the HTML element that received the event
  console.log(this);
}

function color() {
  // images[0].style.filter = 'grayscale(0%)'; // restore color of each image
  // images[1].style.filter = 'grayscale(0%)';
  // images[2].style.filter = 'grayscale(0%)';
  // images[3].style.filter = 'grayscale(0%)';

  for (let i = 0; i < images.length; i++) {
    images[i].style.filter = 'grayscale(0%)'; // restore color of each image
  }
}

// event listeners for hover over
// images[0].addEventListener('pointerover', grayscale);
// images[1].addEventListener('pointerover', grayscale);
// images[2].addEventListener('pointerover', grayscale);
// images[3].addEventListener('pointerover', grayscale);

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('pointerover', grayscale);
}

// event listeners for hover off
// images[0].addEventListener('pointerout', color);
// images[1].addEventListener('pointerout', color);
// images[2].addEventListener('pointerout', color);
// images[3].addEventListener('pointerout', color);

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('pointerout', color);
}