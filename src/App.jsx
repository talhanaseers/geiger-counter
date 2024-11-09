import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header.jsx';
import Banner from './components/header/Banner.jsx';

function App() {
  return (
    <>
      <div className="position-relative">
        <Header/>
        <Banner/>

        {/* Placeholders */}
        <div className="bg-yellow-400 h-40 flex items-center justify-center">
            <h1 className="text-white text-center">Device Connection</h1>
        </div>

        <div className="bg-yellow-300 h-128 flex items-center justify-center">
            <h1 className="text-white text-center">Graphs and Charts</h1>
        </div>

        <div className="bg-yellow-400 h-128 flex items-center justify-center">
            <h1 className="text-white text-center">AI Integration</h1>
        </div>

      </div>
    </>
  )
}

export default App
