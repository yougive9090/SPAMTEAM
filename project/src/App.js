import './App.css';
import Menu from './js/menu';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Menu />} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
