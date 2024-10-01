import requests
import json

# API key and URL
api_key = "T7H40F0X82VGW7L5"
url = "https://api.thingspeak.com/update"

# Data to be sent
field1 = 20
field2 = 33

# First way: Send field1 and field2 inside URL
url_with_params = f"{url}?api_key={api_key}&field1={field1}&field2={field2}"
response = requests.post(url_with_params)
print("Response from URL with params:", response.text)
print("Data sent using URL parameters.")