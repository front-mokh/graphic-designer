gsap.registerPlugin(ScrollTrigger);

//menuButton

var menuButton = document.querySelector(".menu-button");
var topBar = menuButton.querySelector(".bar:nth-child(1)");
var midBar = menuButton.querySelector(".bar:nth-child(2)");
var bottomBar = menuButton.querySelector(".bar:nth-child(3)");

var menu = document.querySelector(".menu");
var menuSlide = document.querySelector(".menu-slide");

menuButton.addEventListener("click", function () {
  var isOpen = menu.getAttribute("data-open") == "true";
  if (!isOpen) {
    menu.setAttribute("data-open", true);
    gsap
      .timeline({
        ease: "power4.in",
      })
      .to(midBar, 0.3, {
        width: 0,
      })
      .to(
        topBar,
        0.3,
        {
          rotate: 45,
          y: 8,
        },
        "same-time"
      )
      .to(
        bottomBar,
        0.3,
        {
          rotate: -45,
          y: -8,
        },
        "same-time"
      )
      .to(menuSlide, {
        x: 0,
      })
      .to(menu, {
        x: 0,
      })
      .staggerTo(
        ".nav-links li",
        1,
        {
          opacity: 1,
          x: 0,
          scale: 1,
        },
        0.2
      );
  } else {
    menu.setAttribute("data-open", false);
    gsap
      .timeline({
        ease: "power4.out",
      })
      .staggerTo(
        ".nav-links li",
        0.6,
        {
          opacity: 0,
          x: 30
          
        },
        0.2
      )
      .to(menu, {
        x: "100%",
      })
      .to(menuSlide, {
        x: "100%",
      })
      .to(
        topBar,
        0.3,
        {
          rotate: 0,
          y: 0,
        },
        "same-time"
      )
      .to(
        bottomBar,
        0.3,
        {
          rotate: 0,
          y: 0,
        },
        "same-time"
      )
      .to(midBar, 0.3, {
        width: "2rem",
      });
  }
});

//Project Image Overlay
var projectImageWrapper = document.querySelectorAll(".project-image-wrapper");

projectImageWrapper.forEach((item) => {
  let overlay = item.querySelector(".project-image-overlay");
  item.addEventListener("mouseenter", () => {
    gsap
      .timeline()
      .to(overlay, 0.4, {
        height: "100%",
        ease: "power4.in",
      })
      .to(overlay.querySelector(".brand"), 0.4, {
        opacity: 1,
        scale: 1,
        y: 5,
        ease: "power4.in",
      });
  });
  item.addEventListener("mouseleave", () => {
    gsap
      .timeline()
      .to(overlay.querySelector(".brand"), 0.4, {
        opacity: 0,
        scale: 0.98,
        y: 0,
        ease: "power4.out",
      })
      .to(overlay, 0.2, {
        height: "0",
        ease: "power4.in",
      });
  });
});

//Slide Container (Parllax Shit)
var slides = document.querySelectorAll(".slide-container");
let mm = gsap.matchMedia();
slides.forEach((slide, i) => {
  let imageWrapper = slide.querySelector(".project-image-wrapper");

  mm.add("(min-width: 60rem)", () => {
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
        },
        ease: "none",
      }
    );
  });
});

//Title Slide In

let titles = document.querySelectorAll(".project-title");
let results = Splitting({ target: titles, by: "lines" });

results.forEach((splitResult) => {
  const wrappedLines = splitResult.lines
    .map(
      (wordsArr) => `
        <span class="line"><div class="words">
          ${wordsArr
            .map(
              (word) => `${word.outerHTML}<span class="whitespace"> 
         </span>`
            )
            .join("")}
        </div></span>`
    )
    .join("");
  splitResult.el.innerHTML = wrappedLines;
});

gsap.registerPlugin(ScrollTrigger);
let revealLines = titles.forEach((element) => {
  const lines = element.querySelectorAll(".line .words");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      toggleActions: "restart none none reset",
      start: "top bottom",
    },
  });
  tl.set(titles, { autoAlpha: 1 });
  tl.from(lines, 1, {
    yPercent: 100,
    ease: Power4.out,
    stagger: 0.2,
    delay: 0,
  });
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
