window.Telegram.WebApp.ready();

const avatar = document.getElementById('avatar');
const username = document.getElementById('username');

// Получаем данные пользователя из Telegram WebApp SDK
const user = window.Telegram.WebApp.initDataUnsafe.user;

if (user) {
    // Устанавливаем аватар и имя пользователя
    avatar.src = user.photo_url;
    username.textContent = user.first_name;
} else {
    username.textContent = 'Гость';
}