/*Carrossel de fotos*/
const sliderContent = document.querySelector('.slider-content');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
        
let currentIndex = 0;
const totalSlides = indicators.length;

// Função para atualizar o slide e os indicadores
function updateSlider() {
  const offset = -currentIndex * 100;
  sliderContent.style.transform = `translateX(${offset}%)`;

// Atualizar indicadores
indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
        indicator.classList.add('active');
    } else {
        indicator.classList.remove('active');
    }
  });
 }

// Função para ir para o slide anterior
function prevSlide() {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  updateSlider();
}

// Função para ir para o slide seguinte
function nextSlide() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlider();
}

// Definir evento para os indicadores
indicators.forEach(indicator => {
    indicator.addEventListener('click', (event) => {
    currentIndex = parseInt(event.target.dataset.slide);
    updateSlider();
   });
});

// Eventos para os botões de navegação
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Inicializar o slider
updateSlider();