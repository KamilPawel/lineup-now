
import React from 'react';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Nested from './pages/nested-example/Nested';
import NestedPage from './pages/nested-example/nested-page/NestedPage';
import { BrowserRouter } from 'react-router-dom';



// TODO: potentially come up with a better way to
// nest routes to reuse the previous route path

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nested-example/*" element={<Nested />} />
        <Route path="/nested-example/nested-page" element={<NestedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
