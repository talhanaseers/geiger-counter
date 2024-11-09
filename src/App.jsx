// App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './components/header/SiteNav.jsx';
import Home from './components/pages/Home.jsx';
import Devices from './components/pages/Devices.jsx';
import Visualize from './components/pages/Visualize.jsx';
import Analyze from './components/pages/Analyze.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <Router>
      <div>
        {/* Site Navigation */}
        <SiteNav />

        {/* Main Content with scrollable sections */}
        <div>
          <Home />
          <Devices />
          <Visualize />
          <Analyze />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
