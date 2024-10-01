import requests

url = "https://api.thingspeak.com/update"
api_key = "T7H40F0X82VGW7L5"

params = {
    "api_key": api_key,
    "field1": 20,
    "field2": 30
}

response = requests.get(url, params=params)

print(f"Status Code: {response.status_code}")
print(f"Response from JSON request body: {response.text}")
