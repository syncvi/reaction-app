import React from "react"
import "./moviesPage.css"
import FilmList from "../../components/filmList/filmList";
import '../../components/filmList/FilmList.css'



const MoviesPage = () => {
    return (
        <div class="MoviesPage">
           <FilmList />
        </div>
    )
}
export default MoviesPage