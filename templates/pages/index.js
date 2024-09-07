// Примерный URL вашего API (замените на актуальный)
const apiUrl = 'http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key={{ 3e55b8ec-fbbc-4599-a963-1051f48de2d0 }}'; 

// Функция для запроса данных
async function fetchAirQualityData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Извлекаем данные
        const aqi = data.aqi;  // Индекс AQI
        const lastUpdate = data.lastUpdate;  // Время последнего обновления

        // Обновляем индекс AQI на странице
        document.getElementById('aqi-value').textContent = aqi;

        // Обновляем индикатор AQI в зависимости от уровня
        const aqiIndicator = document.getElementById('aqi-indicator');
        if (aqi <= 50) {
            aqiIndicator.textContent = 'Хорошее';
            aqiIndicator.style.backgroundColor = '#28a745';  // Зеленый
        } else if (aqi <= 100) {
            aqiIndicator.textContent = 'Умеренное';
            aqiIndicator.style.backgroundColor = '#ffc107';  // Желтый
        } else if (aqi <= 150) {
            aqiIndicator.textContent = 'Вредно для чувствительных групп';
            aqiIndicator.style.backgroundColor = '#fd7e14';  // Оранжевый
        } else {
            aqiIndicator.textContent = 'Вредно';
            aqiIndicator.style.backgroundColor = '#dc3545';  // Красный
        }

        // Обновляем время последнего обновления
        document.getElementById('last-update').textContent = `Последнее обновление: ${lastUpdate}`;
    } catch (error) {
        console.error('Ошибка при получении данных API:', error);
    }
}

// Вызов функции для получения данных
fetchAirQualityData();
