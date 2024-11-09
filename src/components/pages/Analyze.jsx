// components/pages/Analyze.jsx
import React from 'react';

function Analyze() {
  return (
    <div
      id="analyze-section"
      className="h-screen flex items-center justify-center bg-yellow-800 pt-24" // Solid yellow background (darker shade)
      style={{
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
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Dark overlay for better contrast
          zIndex: 0, // Ensure overlay is behind the text
        }}
      />

      {/* Heading Text */}
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
        Analyze
      </h1>
    </div>
  );
}

export default Analyze;
