from django.http import JsonResponse
import requests

# def air_quality_view(request):
#     api_key = '3e55b8ec-fbbc-4599-a963-1051f48de2d0'  # Ваш фактический API-ключ
#     city = 'Bishkek'
#     state = 'Bishkek'
#     country = 'Kyrgyzstan'

#     # Правильный URL API IQAir для получения данных о качестве воздуха
#     url = f'http://api.airvisual.com/v2/city?city=Bishkek&state=Bishkek&country=Kyrgyzstan&key=3e55b8ec-fbbc-4599-a963-1051f48de2d0'

#     try:
#         response = requests.get(url)
#         response.raise_for_status()  # Проверка на ошибки HTTP
#         data = response.json()
#         return JsonResponse(data)
#     except requests.exceptions.RequestException as e:
#         return JsonResponse({'error': str(e)}, status=500)

def air_quality_view(request):
    # Логика получения данных
    return render(request, 'air_quality.html')
