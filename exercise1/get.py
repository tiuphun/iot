import requests

def fetch_data():
    url = "https://api.thingspeak.com/channels/1529099/feeds.json?results=2"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        feeds = data.get('feeds', [])
        
        for feed in feeds:
            temperature = feed.get('field1')
            humidity = feed.get('field2')
            print(f"Temperature: {temperature}, Humidity: {humidity}")
    else:
        print("Failed to fetch data from ThingSpeak API")

if __name__ == "__main__":
    fetch_data()