import './App.css';
import Menu from './js/menu';
import Home from './js/home';
import HunMenu from './js/hun_menu';
import Wkrurwmd from './js/wkrurwmd';

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
          <Route path="/Certificate" element={<Wkrurwmd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;