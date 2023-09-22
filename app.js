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
