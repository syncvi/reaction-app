import React from "react"
import FollowButton from "../followButton/followButton";
import "./actorItem.css"

const ActorItem = (props) => {
    return(
        <div class="card">
          <div class="image">
            <img src={props.Picture} alt="profil" />
          </div>
          <div class="title">
              <h3 style={{paddingLeft:"10px"}}>{props.Name}</h3>
              <h3 style={{paddingLeft:"10px"}}>{props.Surname}</h3>
            </div>
          <div class="info">
            <div class="columnleft">
              <p>Data Urodzenia: {props.Birthday}</p>
            </div>
            <div class="columnright">
              <div class="Length">
                <h6>
                  Kraj pochodzenia: {props.Country}
                </h6>
              </div>
            </div>
          </div>
          <div class="btn">
              <FollowButton />
          </div>
        </div>
          );
    };
    export default ActorItem