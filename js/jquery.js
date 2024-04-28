$(function () {
  $(".zdo_drawer_button").click(function () {
    $(this).toggleClass("active");
  });
});

//スライドショー
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    console.log(slides.length);
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 4000); //画像が切り替わる間隔(ミリ秒)
}

//ドロップダウンメニュー
$(document).ready(function () {
  $(".zdo_drawer_button").click(function () {
    $(".dropdown_content").toggle();
  });
});
