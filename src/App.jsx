import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', background: '#eee' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/veg" style={{ marginRight: '15px' }}>Veg</Link>
          <Link to="/nonveg">Non-Veg</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
