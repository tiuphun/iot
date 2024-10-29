import paho.mqtt.client as mqtt
import json

BROKER = "broker.hivemq.com"
PORT = 1883
TOPIC = "tieuphuong/20210692"

message = {
    "DeviceId": 11,
    "packet_no": 126,
    "temperature": 30,
    "humidity": 60
}

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe(TOPIC)


def on_message(client, userdata, msg):
    print(f"Message received on topic {msg.topic}")
    payload = msg.payload.decode('utf-8')
    data = json.loads(payload)
    
    print(f"Device ID: {data['DeviceId']}")
    print(f"Packet No: {data['packet_no']}")
    print(f"Temperature: {data['temperature']}°C")
    print(f"Humidity: {data['humidity']}%")

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect(BROKER, PORT, 60)

client.publish(TOPIC, json.dumps(message))
print(f"Published message: {json.dumps(message)}")

client.loop_forever()
