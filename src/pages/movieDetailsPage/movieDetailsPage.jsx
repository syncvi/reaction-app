import React,{useState, useEffect} from'react'
import {Link, useNavigate} from 'react-router-dom'
import FollowButton from '../../components/followButton/followButton';
import CommentList  from '../../components/commentList/commentList'

const DetailsFilm = () =>{
    const [props, setProps] = useState("");
    let history = useNavigate();
    useEffect(() =>{
        setProps(localStorage.getItem('filmTitle'))
    },[])

    return(
        <div class="main1">
        <div className="container">
            <div className="row" style={{paddingTop:"30px", paddingBottom:"30px"}}>
                <div className="col" style={{fontSize:"50px"}}>
                    Tytuł filmu
                </div>
                <div className="col" style={{paddingLeft:"100px", paddingTop:"30px"}}>Ocena: np. 3/5</div>
                <div className="col"><FollowButton /></div>
            </div>
            <div className="row">
                <div className="col">
                    <img src="https://images7.alphacoders.com/617/617970.png" style={{height:"300px"}}></img>
                </div>
                <div className="col"><h3>Tu damy język: </h3><h2>polski</h2>
                    Data wydania : 23.12.2020
                </div>
            </div>
            <div className="row">
                <div style={{maxWidth:"1100px"}}>
                Tu damy przedlugi opis filmuOOOOOO OOOO OOOOOOO OOOOOOO OOOOO OOOOO OOOOOOOOOO OOOOOOOOOO OOOO OOOOOOO OOOp ppppppp ppppp ppppp p ppppppp pppppp pppppp pppp piii iiii  iiiiiiii iiiiiiiii iiiii iiiiiiss ssss ssssssss sssss ssssssssss pisi kOpisikOpis ikOpisikOpisi OpisikOpi sikOpisikOpisik OpisikOpisikOpisi kOpisikO pisik is ikOpisik Opisik Opis ikOpisi  kO pisikOpisikO  pisikO pisikOpi sikOpis ikOpi sikOpis ikOpis ikOpis ikOpis ikOpis ikOpisi kOp isik
                </div>
            </div>
            <div className="row" style={{paddingTop:"50px"}}>
                <div className="col">
                    Tu damy liste aktorow:
                    <ul>
                        <li>
                            Jeden aktor
                        </li>
                        <li>
                            Drugi aktor
                        </li>
                        <li>
                            Trzeci aktor
                        </li>
                        <li>
                            Czwarty aktor
                        </li>
                    </ul>

                </div>
                <div className="col" style={{paddingTop:"50px"}}>
                    <CommentList />
                </div>
            </div>
        </div>
        </div>
    )
}
export default DetailsFilm