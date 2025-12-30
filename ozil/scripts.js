const cakeImages = ["images/cake.jpg", "images/cake2.jpg", "images/cake3.jpg"];

let currentIndex = 0;

function changeSlide(direction) {
  currentIndex += direction;

  // Если дошли до конца — в начало, если в начало — в конец
  if (currentIndex >= cakeImages.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = cakeImages.length - 1;
  }

  // Меняем атрибут src у картинки
  document.getElementById("cake-slide").src = cakeImages[currentIndex];
}

const addToCart = (product) => {
  const notification = document.getElementById("cart-notification");

  // Показываем уведомление
  notification.classList.add("show");

  // Скрываем через 3 секунды
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
};

document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("order-form");
  const successMessage = document.getElementById("success-message");

  if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
      // 1. Останавливаем реальную отправку формы на сервер
      event.preventDefault();

      // 2. Имитируем "загрузку" (необязательно, но для реализма)
      const submitBtn = orderForm.querySelector('button[type="submit"]');
      submitBtn.textContent = "Отправка...";
      submitBtn.disabled = true;

      setTimeout(() => {
        // 3. Скрываем форму и показываем сообщение об успехе
        orderForm.style.display = "none";
        successMessage.style.display = "block";

        // Выводим в консоль данные (для проверки разработчиком)
        console.log("Заказ успешно имитирован!");
      }, 1000); // Задержка 1 секунда для эффекта работы сервера
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("order-form");
  const successMessage = document.getElementById("success-message");

  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Останавливаем ошибку 405

      // Скрываем форму плавно
      orderForm.style.opacity = "0";

      setTimeout(() => {
        orderForm.style.display = "none"; // Убираем совсем
        successMessage.style.display = "block"; // Показываем блок в центре
      }, 400);
    });
  }
});
