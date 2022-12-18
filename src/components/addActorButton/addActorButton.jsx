import React, { useState } from 'react';
import AddActorItem from '../addActorItem/addActorItem';

function AddActorButton(){
    var user = JSON.parse(localStorage.getItem("userInfo"))
    var check = false

    if (user !== null && (user.TypKonta === 'Moderator' || user.TypKonta === 'Administrator')) check = true
    else check = false

    const [isShown, setIsShown] = useState(false);
    const handleAdd = () => {
        setIsShown(current => !current);
    }

    return(
        <div>
         {check === true &&
                <div>
                    <button style={{ minWidth: "100%", marginTop: "200px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd()}>Dodaj Osobę</button>
                    {isShown &&
                        <div><AddActorItem></AddActorItem>
                        </div>
                    }
                </div>
            }
        </div>
    )

}


export default AddActorButton;