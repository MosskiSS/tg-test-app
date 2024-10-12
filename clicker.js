const coin = document.getElementById('coin');

// Функция для обработки нажатия
function handlePress(event) {
    event.preventDefault();
    
    const rect = coin.getBoundingClientRect();
    const isTouchEvent = event.type.startsWith('touch');
    const x = isTouchEvent ? event.touches[0].clientX - rect.left - rect.width / 2 : event.clientX - rect.left - rect.width / 2;
    const y = isTouchEvent ? event.touches[0].clientY - rect.top - rect.height / 2 : event.clientY - rect.top - rect.height / 2;

    const rotateX = y / rect.height * 30; // Угол по оси X (вверх-вниз)
    const rotateY = -x / rect.width * 30; // Угол по оси Y (влево-вправо)

    coin.style.transform = `scale(0.9) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// Функция для восстановления положения
function handleRelease() {
    coin.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
}

// Обработчики для ПК (мышь)
coin.addEventListener('mousedown', handlePress);
coin.addEventListener('mouseup', handleRelease);
coin.addEventListener('mouseleave', handleRelease);

// Обработчики для мобильных устройств (сенсор)
coin.addEventListener('touchstart', handlePress);
coin.addEventListener('touchend', handleRelease);
