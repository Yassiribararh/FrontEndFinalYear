console.log("hello");


// script for the slideshow
let myIndex = 0;
carousel();


function carousel() {
  let i;
  const x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}

  x[myIndex-1].style.display = "block";
  //setTimeout(carousel, 3000); // Change image automatically
};


// JavaScript handles to our previous and next buttons
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

// EventListeners for our previous and next buttons
nextBtn.addEventListener('click', ev => {
   const nextslide = carousel() + 1;
});
prevBtn.addEventListener('click', ev => {
   const npreviouslide = carousel() - 1;
});
