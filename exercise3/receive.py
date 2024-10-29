import pika
import json

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
channel.queue_declare(queue='data_queue')

def callback(ch, method, properties, body):
    data_packet = json.loads(body)
    print(f"Received Data: {data_packet}")

channel.basic_consume(queue='data_queue', on_message_callback=callback, auto_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()