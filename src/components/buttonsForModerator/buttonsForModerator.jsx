import React ,{useState} from 'react'
import MatchActorFilm from "../../components/matchActorFilm/matchActorFilm"
import MatchCategoryFilm from "../../components/matchCategoryFilm/matchCategoryFilm"
import DeleteFilm from "../../components/deleteFilm/deleteFilm"
import DeleteActor from "../../components/deleteActor/deleteActor"
import DeleteUser from "../../components/deleteUser/deleteUser"
import ChangePassword from "../../components/changePassword/changePassword"
import AddCompany from "../../components/addCompany/addCompany"
import ChangeFilm from "../../components/changeFilm/changeFilm"
import ChangeActor from "../../components/changeActor/changeActor"

function ButtonsForModerator() {

    const [val, setVal] = useState([]);
    const handleAdd=()=>{
        const abc=[val]
        setVal(abc)
    }
    const [val1, setVal1] = useState([]);
    const handleAdd1=()=>{
        const abc=[val]
        setVal1(abc)
    }
    const [val2, setVal2] = useState([]);
    const handleAdd2=()=>{
        const abc=[val]
        setVal2(abc)
    }
    const [val3, setVal3] = useState([]);
    const handleAdd3=()=>{
        const abc=[val]
        setVal3(abc)
    }
    const [val4, setVal4] = useState([]);
    const handleAdd4=()=>{
        const abc=[val]
        setVal4(abc)
    }
    const [val5, setVal5] = useState([]);
    const handleAdd5=()=>{
        const abc=[val]
        setVal5(abc)
    }
    const [val6, setVal6] = useState([]);
    const handleAdd6=()=>{
        const abc=[val]
        setVal6(abc)
    }
    const [val7, setVal7] = useState([]);
    const handleAdd7=()=>{
        const abc=[val]
        setVal7(abc)
    }
    const [val8, setVal8] = useState([]);
    const handleAdd8=()=>{
        const abc=[val]
        setVal8(abc)
    }

    const handleChange = () => {
    }
    const handleChange1 = () => {
    }
    const handleChange2 = () => {
    }
    const handleChange3 = () => {
    }
    const handleChange4 = () => {
    }
    const handleChange5 = () => {
    }
    const handleChange6 = () => {
    }
    const handleChange7 = () => {
    }
    const handleChange8 = () => {
    }
    return (
        <>
        <button style={{minWidth:"100%", marginTop:"200px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd()}>Zmień hasło</button>
        {val.map(()=>{
            return(
                <ChangePassword onChange={e=>handleChange(e)}></ChangePassword>
            )
        }
        )}
        <button style={{minWidth:"100%", marginTop:"20px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd1()}>Dołącz film z aktorem</button>
        {val1.map(()=>{
            return(
                <MatchActorFilm onChange={e=>handleChange1(e)}></MatchActorFilm>
            )
        }
        )}
        <button style={{minWidth:"100%", marginTop:"20px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd2()}>Dołącz film z kategorią</button>
        {val2.map(()=>{
            return(
                <MatchCategoryFilm onChange={e=>handleChange2(e)}></MatchCategoryFilm>
            )
        }
        )}
        <button style={{minWidth:"100%", marginTop:"20px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd3()}>Usuń film</button>
        {val3.map(()=>{
            return(
                <DeleteFilm onChange={e=>handleChange3(e)}></DeleteFilm>
            )
        }
        )}
        <button style={{minWidth:"100%", marginTop:"20px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd4()}>Usuń aktora</button>
        {val4.map(()=>{
            return(
                <DeleteActor onChange={e=>handleChange4(e)}></DeleteActor>
            )
        }
        )}
        <button style={{minWidth:"100%", marginTop:"20px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd5()}>Usuń użytkownika</button>
        {val5.map(()=>{
            return(
                <DeleteUser onChange={e=>handleChange5(e)}/>
            )
        }
        )}
        <button style={{minWidth:"100%", marginTop:"20px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd6()}>Dodaj Firmę produkcyjną</button>
        {val6.map(()=>{
            return(
                <AddCompany onChange={e=>handleChange6(e)}/>
            )
        }
        )}
        <button style={{minWidth:"100%", marginTop:"20px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd7()}>Zmień tytuł filmu</button>
        {val7.map(()=>{
            return(
                <ChangeFilm onChange={e=>handleChange7(e)}/>
            )
        }
        )}
        <button style={{minWidth:"100%", marginTop:"20px", background:"#060a1f", color:"white", borderRadius:"10px", fontSize:"20px"}} onClick={() => handleAdd8()}>Zmień dane aktora</button>
        {val8.map(()=>{
            return(
                <ChangeActor onChange={e=>handleChange8(e)}/>
            )
        }
        )}
        {/* <div class="rowek">
            <MatchActorFilm onChange={e=>handleChange()}/>
                <div class="col">
                    <div class="rowek">
                        <MatchCategoryFilm onChange={e=>handleChange()}/>
                    </div>
                    <div class="rowek" style={{marginTop:"95px"}}>
                        <DeleteFilm onChange={e=>handleChange()}/>
                    </div>
                </div>
        </div>
            <div class="rowek">
                <DeleteActor onChange={e=>handleChange()}/>
                    <div class="col">
                        <DeleteUser onChange={e=>handleChange()}/>
                    </div>
            </div> */}
            </>
    )
}
export default ButtonsForModerator;