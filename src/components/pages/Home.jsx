// components/pages/Home.jsx
import React from 'react';
import homeImage from '../../assets/home.png';  // Import the image

function Home() {
  return (
    <div
      id="home-section"
      className="h-screen flex items-center justify-center bg-yellow-500 pt-24"
      style={{
        backgroundImage: `url(${homeImage})`, // Set the background image
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better contrast
          zIndex: 0, // Ensure overlay is behind the text
        }}
      />

      {/* Brand Text (Gamma Sense) */}
      <div
        className="absolute top-20 flex justify-center w-full z-10"
        style={{
          marginBottom: '10px', // Reduced space between the brand text and heading text
        }}
      >
        <h2
          className="text-white text-center font-extrabold"
          style={{
            fontSize: '5rem', // Larger font size for "Gamma Sense"
            letterSpacing: '0.1em', // Slightly spaced letters for elegance
            textShadow: '2px 2px 15px rgba(0, 0, 0, 0.7)', // Bold text shadow for contrast
            marginTop: '170px', // Reduced margin between brand and heading text
          }}
        >
          Gamma Sense
        </h2>
      </div>

      {/* Heading Text */}
      <h1
        className="text-white text-center font-extrabold"
        style={{
          fontSize: '1rem', // Adjust text size for the heading
          textShadow: '2px 2px 15px rgba(0, 0, 0, 0.7)', // Subtle but bold text shadow for contrast
          padding: '20px 40px', // Adequate padding for breathing room
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent dark background for text
          borderRadius: '12px', // Softer, more rounded corners
          maxWidth: '80%', // Make the text area more compact and centered
          margin: '0 auto', // Ensure the text is centered
          zIndex: 1, // Ensure text stays above the overlay
          transition: 'transform 0.3s ease-in-out', // Smooth hover transition for effect
        }}
      >
        Detect, Visualize, Protect.
      </h1>
    </div>
  );
}

export default Home;
