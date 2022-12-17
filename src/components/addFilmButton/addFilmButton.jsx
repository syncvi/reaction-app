
import React, { useState } from 'react';
import AddFilmItem from '../addFilmItem/addFilmItem';

function AddFilmButton(){
    const [val, setVal] = useState([]);
    const handleAdd=()=>{
        const abc=[...val, []]
        setVal(abc)
    }
    const handleChange=()=>{

    }

    return(
        <div>
        <button onClick={() => handleAdd()}>Dodaj film</button>
        {val.map((data,i)=>{
            return(
                <AddFilmItem onChange={e=>handleChange(e,i)}></AddFilmItem>
            )
        }
        )}
        </div>
    )

}


export default AddFilmButton;