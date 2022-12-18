import React, { useState } from 'react';
import AddFilmItem from '../addFilmItem/addFilmItem';

function AddFilmButton() {
    var user = JSON.parse(localStorage.getItem("userInfo"))
    var check = false

    if (user !== null && (user.TypKonta === 'Moderator' || user.TypKonta === 'Administrator')) check = true
    else check = false

    const [isShown, setIsShown] = useState(false);
    const handleAdd = () => {
        setIsShown(current => !current);
    }

    return (
        <div>
            {check === true &&
                <div>
                    <button style={{ minWidth: "100%", marginTop: "200px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd()}>Dodaj film</button>
                    {isShown &&
                        <div><AddFilmItem></AddFilmItem>
                        </div>
                    }
                </div>
            }
        </div>
    )
}


export default AddFilmButton;