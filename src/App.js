import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router

import ShowBook from './components/showBook';
import Categories from './components/Categories';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      {' '}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShowBook />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
