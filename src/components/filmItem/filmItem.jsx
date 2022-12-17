import React from "react"
import FollowButton from "../followButton/followButton";
import "./FilmItem.css"
import profil from "./images/profile.jpg"


const FilmItem = (props) => {

    return(
        <div class="card">
          <div class="image">
            <img src={profil} alt="profil" />
          </div>
          <div class="title">
              <h3>{props.Title}</h3>
            </div>
          <div class="info">
            <div class="columnleft">
              <p>Data Wydania: {props.ReleaseDate}</p>
            </div>
            <div class="columnright">
              <div class="Length">
                <h6>
                  Długość filmu: {props.Length}
                </h6>
              </div>
            </div>
          </div>
          <div class="btn">
              <FollowButton />
              <button class="btn">Szczegóły</button>
            </div>
        </div>
          );
    };
    export default FilmItem