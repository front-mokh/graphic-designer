var projectImageWrapper = document.querySelectorAll(".project-image-wrapper");

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
