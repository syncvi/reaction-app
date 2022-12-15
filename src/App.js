import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/homePage/homePage'
import Register from './pages/registerPage/registerPage'
import Login from './pages/loginPage/loginPage'
import Profile from './pages/myProfilPage/myProfilPage'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>Movie details page:P</h1>}/>
          <Route path="movies/:type" element={<h1>Movie details page:P</h1>}/>
          <Route path="register" element={<Register />}/>
          <Route path="register/login" element={<Login />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="/*" element={<h2>This aint gonna work</h2>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
