import React from "react";
import FilmItem from "../filmItem/filmItem";
import './FilmList.css'


const FilmListI=[{Title:"Wiedźmin",ReleaseDate:"2001",Language:"Język polski",Length:"120 min",Description:"Opis w luj dlugi ze az sie nie chce czytać",Picture:"Zdjecie dupy Zoltana"},
{Title:"Wiedźmin",ReleaseDate:"2001",Language:"Język polski",Length:"120 min",Description:"Opis w luj dlugi ze az sie nie chce czytać",Picture:"Zdjecie dupy Zoltana"},
{Title:"Wiedźmin",ReleaseDate:"2001",Language:"Język polski",Length:"120 min",Description:"Opis w luj dlugi ze az sie nie chce czytać",Picture:"Zdjecie dupy Zoltana"}]

const FilmList = () => {
    return (
        <ul>
            {FilmListI.map((data) => (
                <li>
                    <FilmItem Title={data.Title} ReleaseDate={data.ReleaseDate} Language={data.Language} Length={data.Length} Description={data.Description} Picture={data.Picture}/>
                </li>
      ))}
    </ul>
           );
    };

export default FilmList