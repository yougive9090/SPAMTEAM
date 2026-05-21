import './App.css';
import Menu from './js/menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <Menu />
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