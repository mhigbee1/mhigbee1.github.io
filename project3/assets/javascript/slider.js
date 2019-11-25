function init(){
  var slideIndex = 1;
  var timer;
  var flag = 0;
  showSlides(slideIndex);

  var prv = document.getElementById('prev');
  prv.addEventListener('click', function() {
    flag =1;
    clearTimeout(timer);
    showSlides(slideIndex -=1);
    tick();
  });

  var nxt = document.getElementById('next');
  nxt.addEventListener('click', function() {
    flag =1;
    clearTimeout(timer);
    showSlides(slideIndex +=1);
    tick();
  });

  var sb_one = document.getElementById('d1');
  sb_one.addEventListener('click', function() {
    flag =1;
    clearTimeout(timer);
    showSlides(slideIndex =1);
    tick();
  });

  var sb_two = document.getElementById('d2');
  sb_two.addEventListener('click', function() {
    flag =1;
    clearTimeout(timer);
    showSlides(slideIndex =2);
    tick();
  });

  var sb_three = document.getElementById('d3');
  sb_three.addEventListener('click', function() {
    flag =1;
    clearTimeout(timer);
    showSlides(slideIndex =3);
    tick();
  });

  var sb_four = document.getElementById('d4');
  sb_four.addEventListener('click', function() {
    flag =1;
    clearTimeout(timer);
    showSlides(slideIndex=4);
    tick();
  });

  function tick(){
    flag = 0;
    timer = setTimeout(showSlides,8000,slideIndex);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideDeck");
    var bullets = document.getElementsByClassName("slide_bullet");

    if (flag==0){
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      timer = setTimeout(showSlides, 3000);
    }else{
      if (n>slides.length) {slideIndex = 1}
      else if (n<1) {slideIndex = slides.length}
      else {slideIndex = n};
      slides[slideIndex-1].style.display = "block";
      bullets[slideIndex-1].className += " running";
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < bullets.length; i++) {
      bullets[i].className = bullets[i].className.replace(" running", "");
    }
    slides[slideIndex-1].style.display = "block";
    bullets[slideIndex-1].className += " running";


  }
}

window.addEventListener('load', init);
