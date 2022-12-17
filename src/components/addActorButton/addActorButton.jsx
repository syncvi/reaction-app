import React, { useState } from 'react';
import AddActorItem from '../addActorItem/addActorItem';

function AddActorButton(){
    const [val, setVal] = useState([]);
    const handleAdd=()=>{
        const abc=[...val, []]
        setVal(abc)
    }
    const handleChange=()=>{

    }

    return(
        <div>
        <button style={{minWidth:"100%", marginTop:"200px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd()}>Dodaj aktora</button>
        {val.map((data,i)=>{
            return(
                <AddActorItem onChange={e=>handleChange(e,i)}></AddActorItem>
            )
        }
        )}
        </div>
    )

}


export default AddActorButton;