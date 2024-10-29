import pika
import json

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
channel.queue_declare(queue='data_queue')

data_packet = {
    "DeviceId": 11,
    "packet_no": 126,
    "temperature": 30,
    "humidity": 60
}

channel.basic_publish(exchange='', routing_key='data_queue', body=json.dumps(data_packet))
print(" [x] Sent data packet")

connection.close()