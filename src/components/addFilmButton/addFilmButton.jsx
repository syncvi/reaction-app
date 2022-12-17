
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
        <button style={{minWidth:"100%", marginTop:"200px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd()}>Dodaj film</button>
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