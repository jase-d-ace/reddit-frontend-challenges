import logo from './logo.svg';
import './App.css';
import Home from './Home';
import RecursiveNestedFolderDisplay from './challenges/RecursiveNestedFolderDisplay';
import DebouncedInput from './challenges/DebouncedInput';
import PaginationComponent from './challenges/PaginationComponent';
import SimulatedPromise from './challenges/SimulatedPromise';
import Accordion from './challenges/Accordion';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recursive" element={<RecursiveNestedFolderDisplay />} />
        <Route path="/debounce" element={<DebouncedInput />} />
        <Route path="/pagination" element={<PaginationComponent />} />
        <Route path="/promise" element={<SimulatedPromise />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
