import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Add/>}/>
        <Route path="/view"  element={<View/>}/>
        <Route path="/search"  element={<Search/>}/>
        <Route path="/delete"  element={<Delete/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
