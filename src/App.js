import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<h1>Siema2</h1>}></Route>
          <Route path="movie/:id" element={<h1>Movie details page:P</h1>}/>
          <Route path="movies/:type" element={<h1>Movie details page:P</h1>}/>
          <Route path="/*" element={<h2>This aint gonna work</h2>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
