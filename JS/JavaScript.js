/*Cabeçalho*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

/*Carrossel de fotos*/
let currentIndex = 0;

function changeSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100; // Desloca a imagem para a esquerda

    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

/*Carrossel w3*/ 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
