import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import ShowBook from './components/showBook';
import Categories from './components/Categories';
import Arrange from './components/arrange';

function App() {
  return (
    <Router>
      {' '}
      <Routes>
        <Route path="/" element={<Arrange />}>
          <Route index element={<ShowBook />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
