let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

// This Function is for going to Next Slide
function nextSlide() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
}

// This Function is for going to Previous Slide
function prevSlide() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
}

// Add Event Listeners for The Buttons
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Autoplay Image Slide After seconds
let autoPlay = setInterval(nextSlide, 4000);

// Autoplay Will pause When You MouseOver
document.querySelector(".container").addEventListener("mouseover", () => {
  clearInterval(autoPlay);
});

// Autoplay Functionality
document.querySelector(".container").addEventListener("mouseout", () => {
  autoPlay = setInterval(nextSlide, 4000);
});
