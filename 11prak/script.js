const main = document.querySelector(".main");

// Добавляем обработчик события для отправки формы
document.querySelector("form").addEventListener("submit", confirm_order);

let formData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    comment: "",
    // Метод для вывода данных в консоль
    printData() {
        console.log(`
Имя: ${this.name}
E-mail: ${this.email}
Телефон: ${this.phone}
Дата: ${this.date}
Комментарий: ${this.comment}
        `);
    }
};

// Функция для валидации данных
function validateForm(data) {
    if (!data.name || !data.email || !data.comment) {
        alert("Поля 'Как вас зовут', 'Ваш e-mail' и 'Комментарий' обязательны для заполнения.");
        return false;
    }

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(data.phone)) {
        alert("Телефон должен содержать только цифры.");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert("Введите корректный E-mail.");
        return false;
    }

    return true;
}

// Функция для открытия формы
function open_form() {
    main.style.display = "block";
}

// Функция для закрытия формы
function close_form() {
    main.style.display = "none";
}

// Функция для подтверждения заявки
function confirm_order(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем данные из формы
    const form = document.querySelector(".main");

    formData.name = form.querySelector("input[name='name']").value.trim();
    formData.email = form.querySelector("input[name='email']").value.trim();
    formData.phone = form.querySelector("input[name='number']").value.trim();
    formData.date = form.querySelector("input[name='date']").value.trim();
    formData.comment = form.querySelector("textarea[name='comment']").value.trim();

    // Проверяем данные
    if (validateForm(formData)) {
        formData.printData(); // Выводим данные в консоль
        alert("Форма успешно отправлена!");
        form.reset(); // Сбрасываем форму
    }
}
