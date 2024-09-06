import requests

api_key = '3e55b8ec-fbbc-4599-a963-1051f48de2d0'  # Замените на ваш фактический API-ключ
url = "http://api.airvisual.com/v2/countries"

# Параметры запроса
params = {
    'key': api_key
}

response = requests.get(url, params=params)

print(response.json())  # Вывод данных в формате JSON
