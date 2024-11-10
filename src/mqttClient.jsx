import { device } from 'aws-iot-device-sdk';

// Initialize the MQTT client
const client = new device({
  keyPath: 'path-to-private-key',
  certPath: 'path-to-certificate',
  caPath: 'path-to-root-ca',
  clientId: 'react-client-id',
  host: 'a3fd8yrmyxwiz7-ats.iot.us-east-2.amazonaws.com', // Your AWS IoT endpoint
});

// Function to handle incoming messages
const messageHandler = (topic, payload) => {
  const message = JSON.parse(payload.toString());
  console.log('Received message:', message);
  // You can update your state here to render the message in the UI
};

// Function to connect and subscribe to topic
export const connectToIoT = () => {
  client.on('connect', () => {
    console.log('Connected to AWS IoT');
    client.subscribe('esp32/pulse');  // Subscribe to the topic your ESP32 is publishing to
  });

  client.on('message', messageHandler);  // Handle incoming messages
};
