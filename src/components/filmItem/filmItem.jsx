import React from "react"
import FollowButton from "../followButton/followButton";
import "./FilmItem.css"
import {useNavigate} from 'react-router-dom'

const FilmItem = (props) => {
  
  let history = useNavigate();
  const handleDetails = (props) =>{
    localStorage.setItem('filmTitle', JSON.stringify(props));
    history("/filmDetails")
  }

  
    return(
        <div class="card">
          <div class="image">
            <img src={props.Picture} alt="profil" />
          </div>
          <div class="title">
              <h3 style={{paddingLeft:"10px"}}>{props.Title}</h3>
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
              <FollowButton props={props}/>
              <button class="btn" onClick={() => handleDetails(props)}>Szczegóły</button>
          </div>
        </div>
          );
    };
    export default FilmItem