import React from "react"
import "./commentItem.css"

const FilmItem = (props) => {
      return(
          <div class="card1">
            <div class="title1">
                <h3 style={{paddingLeft:"10px"}}>{props.User}</h3>
              </div>
            <div class="info1">
              <div class="columnleft1">
                <p>{props.Comment}</p>
              </div>
              <div class="columnright1">
                <div class="Length1">
                  <h6> {props.Rating}
                  </h6>
                </div>
              </div>
            </div>
          </div>
            );
      };
      export default FilmItem