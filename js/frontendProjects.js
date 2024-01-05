var moviesContainer = document.getElementsByClassName("movies")[0];
var movies = document.getElementsByClassName("movie");
for (var i = 0; i < movies.length; i++) {
  movies[i].onclick = function (e) {
    for (var j = 0; j < movies.length; j++) {
      movies[j].classList.remove("selected");
    }
    // search parent
    var movie = e.target.closest(".movie");
    movie.classList.add("selected");
  };
}

window.addEventListener("scroll", function (e) {
  // Get scroll percentage
  console.log("e", e.target.scrollingElement.scrollTop);
  console.log("e", e);

  var perc =
    (100 / (e.target.scrollingElement.scrollHeight - window.innerHeight)) *
    e.target.scrollingElement.scrollTop;
  
  // Translate movies container to give a cool parallax effect
  moviesContainer.style.transform = `translateY(${-perc}%) translateZ(-312px) rotateY(18deg) rotateX(-12deg) rotateZ(-3deg)`;
  
});



const bg = document.getElementsByClassName("background")[0];
window.addEventListener("pointermove", (function (e) {
  bg.style.backgroundPosition = `calc(50% + ${(window.innerWidth / 2) - e.clientX}px * -1) calc(50% + ${(window.innerHeight / 2) - e.clientY}px * -1)`;
}));
