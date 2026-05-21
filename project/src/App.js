import './App.css';
import Menu from './js/menu';
import HunMenu from './js/hun_menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
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
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;