import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

function Analyze() {
  const [summary, setSummary] = useState('');
  const [predictions, setPredictions] = useState('');

  // Fetch AI data for summaries and predictions
  useEffect(() => {
    async function fetchAIData() {
      try {
        // Replace with your actual API endpoints for fetching AI data
        const summaryResponse = await fetch('/api/ai-summary');
        const predictionsResponse = await fetch('/api/ai-predictions');

        const summaryData = await summaryResponse.json();
        const predictionsData = await predictionsResponse.json();

        setSummary(summaryData.summary);  // Set the AI summary
        setPredictions(predictionsData.predictions);  // Set the AI predictions
      } catch (error) {
        console.error('Error fetching AI data:', error);
      }
    }

    fetchAIData();
  }, []);

  return (
    <div
      id="analyze-section"
      className="h-screen d-flex flex-column align-items-center justify-content-center bg-gradient-to-r from-yellow-600 to-yellow-800 pt-24"
      style={{ position: 'relative' }}
    >
      {/* Overlay for better contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Darker overlay for contrast
          zIndex: 0, // Ensure overlay is behind the text
        }}
      />

      {/* "Coming Soon" Badge */}
<div
  style={{
    position: 'absolute',
    top: '10%', // Position relative to the section container
    right: '5%', // Adjust as necessary
    backgroundColor: '#f0ad4e', // Yellow background for urgency
    color: 'black', // Black text color
    padding: '12px 20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '30px',
    transform: 'rotate(45deg)', // Angled for a dynamic look
    zIndex: 2, // Ensure it's on top of everything else
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', // Soft shadow for depth
  }}
>
  Coming Soon
</div>


      {/* Heading Text */}
      <h1
        className="text-white text-center font-extrabold"
        style={{
          fontSize: '3rem', // Larger font size for emphasis
          textShadow: '4px 4px 20px rgba(0, 0, 0, 0.7)', // Bold text shadow for contrast
          padding: '20px 40px', // Adequate padding for breathing room
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark background for text
          borderRadius: '12px', // Softer, more rounded corners
          maxWidth: '80%',
          margin: '0 auto',
          zIndex: 1,
          marginBottom: '40px', // Space for the summary and predictions
        }}
      >
        AI Chart Analysis & Predictions
      </h1>

      {/* AI Summary Section */}
      <div
        className="card mb-4 shadow-lg"
        style={{
          maxWidth: '80%',
          margin: '0 auto',
          borderRadius: '12px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Slightly darker background for a more professional look
          zIndex: 1, // Ensures it's above the background
        }}
      >
        <div className="card-body text-white text-center">
          <h2 className="card-title mb-3 text-xl font-bold">AI-Generated Summary</h2>
          <p
            className="card-text"
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              opacity: 0.85,
            }}
          >
            {summary || 'Loading summary...'}
          </p>
        </div>
      </div>

      {/* AI Predictions Section */}
      <div
        className="card mb-4 shadow-lg"
        style={{
          maxWidth: '80%',
          margin: '0 auto',
          borderRadius: '12px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Slightly darker background for a more professional look
          zIndex: 1, // Ensures it's above the background
        }}
      >
        <div className="card-body text-white text-center">
          <h2 className="card-title mb-3 text-xl font-bold">Future Predictions</h2>
          <p
            className="card-text"
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              opacity: 0.85,
            }}
          >
            {predictions || 'Loading predictions...'}
          </p>
        </div>
      </div>

      {/* Bootstrap Table for "Coming Soon" Placeholder */}
      <div className="table-responsive my-5" style={{ maxWidth: '90%' }}>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Chart Type</th>
              <th scope="col">Summary</th>
              <th scope="col">Predictions</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty rows as placeholders for future data */}
            <tr>
              <td>1</td>
              <td>Bar Chart</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>
                <span className="badge badge-warning">Coming Soon</span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Line Chart</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>
                <span className="badge badge-warning">Coming Soon</span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Pie Chart</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>
                <span className="badge badge-warning">Coming Soon</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Additional Spacing */}
      <div className="my-8"></div>
    </div>
  );
}

export default Analyze;
