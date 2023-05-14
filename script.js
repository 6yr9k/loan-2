function submitForm() {
    // Предотвращение отправки формы по умолчанию
    event.preventDefault();

    // Получение формы
    var form = document.getElementById("myForm");

    // Отправка формы (можно использовать AJAX или другие методы)
    // В данном примере просто отправляем форму с помощью метода submit()
    form.submit();

    // Переход на страницу "Спасибо за оставленную заявку"
    window.location.href = "thankyou.html";
}

// var slider = document.getElementById("myRange");
// var output = document.getElementById("sliderValue");

// output.innerHTML = slider.value;

// slider.oninput = function () {
//     output.innerHTML = this.value;
// };











const amountRange = document.getElementById('amount');
const amountValue = document.getElementById('amountValue');

amountRange.addEventListener('input', function () {
    amountValue.textContent = amountRange.value;
});


// var range = document.getElementById("amount");
// range.addEventListener("input", function () {
//     var value = (range.value - range.min) / (range.max - range.min) * 100;
//     range.style.background = "linear-gradient(to right, red 0%, red " + value + "%, #ddd " + value + "%, #ddd 100%)";
// });



const rangeInput = document.getElementById('amount');
const sumField = document.querySelector('.form__sum-input');

rangeInput.addEventListener('input', updateFieldColor);
document.addEventListener('DOMContentLoaded', updateFieldColor); // Добавляем обработчик при загрузке страницы

function updateFieldColor() {
    const value = rangeInput.value;
    const percentage = ((value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
    const color = `linear-gradient(to right, #0156FF 0%, #0156FF ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;

    sumField.style.background = color;
}

// Установка начального значения цвета при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    rangeInput.value = rangeInput.getAttribute('value'); // Установка начального значения ползунка из атрибута "value"
    updateFieldColor(); // Обновление цвета поля
});

// слайдер 


const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev-button');
const nextButton = document.querySelector('.carousel-next-button');

let currentIndex = 0;
let slideWidth;

function updateSlideWidth() {
    slideWidth = carouselContainer.clientWidth / 6; // Ширина одного слайда (предполагая, что 6 слайдов)
}

function goToSlide(index) {
    if (index < 0 || index >= carouselContainer.children.length) return;

    currentIndex = index;
    const translateXValue = -currentIndex * slideWidth;
    carouselContainer.style.transform = `translateX(${translateXValue}px)`;
}

function goToPreviousSlide() {
    goToSlide(currentIndex - 1);
}

function goToNextSlide() {
    if (currentIndex === carouselContainer.children.length - 1) {
        return; // Останавливаемся, если уже на последнем слайде
    }
    goToSlide(currentIndex + 1);
}

prevButton.addEventListener('click', goToPreviousSlide);
nextButton.addEventListener('click', goToNextSlide);

window.addEventListener('resize', () => {
    updateSlideWidth();
    goToSlide(currentIndex); // Переход на текущий слайд для обновления позиции
});

// Вызываем updateSlideWidth() для инициализации при загрузке страницы
updateSlideWidth();