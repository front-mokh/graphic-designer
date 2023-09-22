gsap.registerPlugin(ScrollTrigger);
//Custom Cursor

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor-inner");
var a = document.querySelectorAll("a");
var projectImageWrapper = document.querySelectorAll(".project-image-wrapper");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
projectImageWrapper.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.innerHTML = "<p>View</p>";
    cursor.style.padding = "1.5rem";
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    cursor.style.padding = "0";
    cursor.classList.remove("hover");
  });
});

//Project Image Overlay

projectImageWrapper.forEach((item) => {
  let overlay = item.querySelector(".project-image-overlay");
  item.addEventListener("mouseenter", () => {
    gsap.to(overlay, 0.4, {
      height: "100%",
      ease: "power4.in",
    });
  });
  item.addEventListener("mouseleave", () => {
    gsap.to(overlay, 0.4, {
      height: "0",
      ease: "power4.out",
    });
  });
});

//Slide Container (Parllax Shit)
var slides = document.querySelectorAll(".slide-container");

slides.forEach((slide, i) => {
  let imageWrapper = slide.querySelector(".project-image-wrapper");

  let mm = gsap.matchMedia();

  gsap.fromTo(
    imageWrapper,
    {
      y: "-10vh",
    },
    {
      y: "10vh",
      scrollTrigger: {
        trigger: slide,
        scrub: true,
        start: "top bottom",
        snap: {
          snapTo: 0.5,
          duration: 0.5,
          ease: "power4.inOut",
        },
      },
      ease: "none",
    }
  );
});
//Dropdown Lists
var blocks = document.querySelectorAll(".info-block");

blocks.forEach((block) => {
  var title = block.querySelector(".list-title");
  var list = block.querySelector(".list-container");

  title.addEventListener("click", function () {
    if (list.classList.contains("open")) {
      list.classList.remove("open");
    } else {
      list.classList.add("open");
    }
  });
});
