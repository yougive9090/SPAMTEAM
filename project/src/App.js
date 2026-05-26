import './App.css';
import Menu from './js/menu';
import HunMenu from './js/hun_menu';
import Home from './js/home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <>
      <Menu />
      <HunMenu />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;