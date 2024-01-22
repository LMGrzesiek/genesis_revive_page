function changeImages(imageSrc) {
  const slideImages = document.querySelectorAll(".slider img");
  slideImages.forEach((img) => {
    img.src = imageSrc;
  });
}

let currentIndex = 0;

function navigateSlider(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  const translateValue = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${translateValue}px)`;
}

document.addEventListener("DOMContentLoaded", function() {
    const kitsToggle = document.querySelector('.toggle-kits .toggle-switch');
    kitsSwitch(kitsToggle);
    const collectionsToggle = document.querySelector('.toggle-collections .toggle-switch');
    collectionsSwitch(collectionsToggle);
  });

function kitsSwitch(element) {
  const switches = document.querySelectorAll(".kits-switch");
  switches.forEach((switchElement) => {
    switchElement.classList.remove("active");
  });
  element.classList.add("active");
}

function collectionsSwitch(element) {
    const switches = document.querySelectorAll(".collections-switch");
    switches.forEach((switchElement) => {
      switchElement.classList.remove("active");
    });
    element.classList.add("active");
  }


