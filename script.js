const rotates = document.querySelectorAll(".rotate");
const childLists = document.querySelectorAll(".list .question");
const answer = document.querySelectorAll(".answer");

// Dropdown Box Logic
childLists.forEach((childList) => {
  childList.addEventListener("click", (e) => {
    e.target.classList.toggle("activate");
    const answers = e.target.nextElementSibling;
    if (e.target.classList.contains("activate")) {
      answers.style.maxHeight = answers.scrollHeight + "px";
      // console.log(answers.scrollHeight);
    } else {
      answers.style.maxHeight = 0;
    }
  });
});

rotates.forEach((rotate) => {
  rotate.addEventListener("click", (e) => {
    e.target.parentElement.previousElementSibling.previousElementSibling.classList.toggle(
      "activate"
    );
    const answers =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .nextElementSibling;
    if (
      e.target.parentElement.previousElementSibling.previousElementSibling.classList.contains(
        "activate"
      )
    ) {
      answers.style.maxHeight = answers.scrollHeight + "px";
      // console.log(answers.scrollHeight);
    } else {
      answers.style.maxHeight = 0;
    }
  });
});

// Carousel Pari
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

// Cards
const tdcCards = document.querySelectorAll(".tdc-card");

tdcCards.forEach((tdcCard) => {
  tdcCard.addEventListener("click", (e) => {
    if (tdcCard.classList.contains("active"))
      tdcCard.classList.remove("active");
    else {
      document.querySelector(".tdc-card.active")?.classList.remove("active");
      tdcCard.classList.add("active");
    }
  });
});

// Hamburger
const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger-cont span");
const aside = document.querySelector("#aside");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  aside.style.display = "block";
  // aside.classList.add("active");
  overlay.style.display = "block";
  body.style.overflow = "hidden";
});
overlay.addEventListener("click", () => {
  aside.style.display = "none";
  // aside.classList.add("active");
  overlay.style.display = "none";
  body.style.overflow = "auto";
});
