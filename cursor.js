document.addEventListener("mousemove", function(e) {
    var cursor = document.querySelector(".cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
  