import React, { useState } from "react"
import ChangeActor from "../changeActor/changeActor";
import DeleteActor from "../deleteActor/deleteActor";
import FollowButton from "../followButton/followButton";
import "./actorItem.css"

const ActorItem = (props) => {

  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  var userInfo = JSON.parse(localStorage.getItem('userInfo'));
  var check = false
  if (userInfo !== null && (userInfo.TypKonta == 'Moderator' || userInfo.TypKonta == 'Administrator')) check = true
  else check = false
  const handleAdd1 = () => {
    setIsShown1(current => !current);
  }
  const handleAdd2 = () => {
    setIsShown2(current => !current);
  }

  return (
    <div class="card">
      <div class="image">
        <img src={props.Picture} alt="profil" />
      </div>
      <div class="title">
        <h3 style={{ paddingLeft: "10px" }}>{props.Name}</h3>
        <h3 style={{ paddingLeft: "10px" }}>{props.Surname}</h3>
      </div>
      <div class="info">
        <div class="columnleft">
          <p>Data Urodzenia: {props.Birthday}</p>
        </div>
        <div class="columnright">
          <div class="Length">
            <h6 style={{ paddingLeft: "10px" }}>
              Kraj pochodzenia: {props.Country}
            </h6>
          </div>
        </div>
      </div>
      <div class="btn">
        <FollowButton />
      </div>
      {check == true &&
        <div class="btn" style={{ margin: "10px" }}  >
          <button class="btn" onClick={() => handleAdd1()}>Edytuj Aktora</button>
          {isShown1 &&
            <div>
              <ChangeActor />
            </div>
          }
        </div>
      }
      {check == true &&
        <div class="btn" style={{ margin: "10px" }} >
          <button class="btn" onClick={() => handleAdd2()}>Usuń Aktora</button>
          {isShown2 &&
            <div>
              <DeleteActor />
            </div>
          }
        </div>
      }

    </div>
  );
};
export default ActorItem