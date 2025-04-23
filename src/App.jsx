import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const Layout = lazy(() => import('./components/Layout'));
const About = lazy(() => import('./components/About'));
const Publications = lazy(() => import('./components/Publications'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App; 