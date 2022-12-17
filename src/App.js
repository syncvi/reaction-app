import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/homePage/homePage'
import MoviesPage from './pages/moviesPage/moviesPage'
import PersonsPage from './pages/personsPage/personsPage'
import Register from './pages/registerPage/registerPage'
import Login from './pages/loginPage/loginPage'
import Profile from './pages/myProfilPage/myProfilPage'
import DetailsFilm from './pages/movieDetailsPage/movieDetailsPage'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<MoviesPage />}/>
          <Route path="persons" element={<PersonsPage/>}/>
          <Route path="login/register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="/filmDetails" element={<DetailsFilm />}/>
          <Route path="/*" element={<h2>Bad route</h2>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
