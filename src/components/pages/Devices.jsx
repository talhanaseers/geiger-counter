import React, { useState, useEffect } from 'react';
import devicesImage from '../../assets/devices.png';  // Import your background image

function Devices() {
  const [pingData, setPingData] = useState(null);

  // Fetch ping data from your API Gateway
  useEffect(() => {
    const fetchPingData = async () => {
      try {
        const response = await fetch('https://YOUR_API_GATEWAY_URL/ping'); // Replace with your actual API Gateway URL
        const data = await response.json();
        setPingData(data.message); // Assuming message is the ping response from the Lambda
      } catch (error) {
        console.error('Failed to load ping data:', error);
      }
    };

    fetchPingData();
  }, []);

  return (
    <div
      id="devices-section"
      className="h-screen flex flex-col items-center justify-center bg-yellow-800 pt-24" // Match Analyze styling
      style={{
        backgroundImage: `url(${devicesImage})`, // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Center the image
        position: 'relative', // Position relative for overlay
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Darker overlay for better contrast
          zIndex: 0, // Ensure overlay is behind the text
        }}
      />

{/* Device Status Heading */}
<h2
        className="text-white text-center font-semibold mt-6"
        style={{
          fontSize: '2.5rem', // Adjust text size for the device status heading
          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.6)', // Subtle shadow for contrast
          padding: '15px 30px', // Padding for spacing
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darker semi-transparent background for text
          borderRadius: '10px', // Rounded corners
          marginBottom: '300px',
          zIndex: 1,
        }}
      >
        Device Status
      </h2>

      {/* Heading Text for Connection Status */}
      <h1
        className="text-white text-center font-extrabold"
        style={{
          fontSize: '2rem', // Larger font size for emphasis
          textShadow: '2px 2px 15px rgba(0, 0, 0, 0.7)', // Bold text shadow for contrast
          padding: '20px 40px', // Adequate padding for breathing room
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent dark background for text
          borderRadius: '12px', // Softer, more rounded corners
          maxWidth: '80%', // Make the text area more compact and centered
          margin: '0 auto', // Ensure the text is centered
          zIndex: 1, // Ensure text stays above the overlay
          
          transition: 'transform 0.3s ease-in-out', // Smooth hover transition for effect
        }}
      >
        Connected to ESP32_PULSE via AWS IoT Core
      </h1>

      

      {/* Ping Data Section */}
      <div
        className="text-white text-center font-bold text-xl mt-8"
        style={{
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker background for the ping text area
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '80%',
          margin: '20px auto',
          marginBottom: '100px',
        }}
      >
        {pingData ? (
          <div>{pingData}</div> // Display the ping data
        ) : (
          <div>Loading ping data...</div> // Show loading text if no data
        )}
      </div>
    </div>
  );
}

export default Devices;
