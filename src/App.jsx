import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header.jsx';
import Banner from './components/header/Banner.jsx';

function App() {
  return (
    <>
      <div className="position-relative min-w-[400px]">
        <Header/>
        <Banner/>

        {/* Placeholders */}
        <div className="h-48 flex items-center justify-center">
            <h1 className="text-black text-center">Device Connection</h1>
        </div>

        <div className="h-128 flex items-center justify-center">
            <h1 className="text-black text-center">Graphs and Charts</h1>
        </div>

        <div className="h-128 flex items-center justify-center">
            <h1 className="text-black text-center">AI Integration</h1>
        </div>

      </div>
    </>
  )
}

export default App
