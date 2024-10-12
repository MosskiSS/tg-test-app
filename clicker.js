const coin = document.getElementById('coin');

// Обработчик события нажатия
coin.addEventListener('mousedown', (event) => {
    // Определяем координаты мыши относительно монеты
    const rect = coin.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    // Применяем трансформацию для наклона в зависимости от положения нажатия
    const rotateX = y / rect.height * 30; // Угол по оси X (вверх-вниз)
    const rotateY = -x / rect.width * 30; // Угол по оси Y (влево-вправо)
    
    // Плавное уменьшение монеты с наклоном
    coin.style.transform = `scale(0.9) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Восстанавливаем исходное положение после отпускания
coin.addEventListener('mouseup', () => {
    coin.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
});

coin.addEventListener('mouseleave', () => {
    coin.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
});
