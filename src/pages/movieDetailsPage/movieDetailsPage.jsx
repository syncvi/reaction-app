import React, { useState, useEffect } from 'react'
import FollowButton from '../../components/followButton/followButton';
import CommentList from '../../components/commentList/commentList'
import AddComment from '../../components/addComment/addComment';
import MatchActorFilm from "../../components/matchActorFilm/matchActorFilm"
import MatchCategoryFilm from "../../components/matchCategoryFilm/matchCategoryFilm"
import AddCompany from "../../components/addCompany/addCompany"
import DeleteFilm from "../../components/deleteFilm/deleteFilm"
import ChangeFilm from "../../components/changeFilm/changeFilm"

const DetailsFilm = () => {
    const [props, setProps] = useState("");
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    var check = false
    if (userInfo !== null && (userInfo.TypKonta === 'Moderator' || userInfo.TypKonta === 'Administrator')) check = true
    else check = false
    useEffect(() => {
        var retrievedObject = localStorage.getItem('filmTitle');
        console.log(JSON.parse(retrievedObject))
        setProps(JSON.parse(retrievedObject))
    }, [])

    
    const handleAdd1 = () => {
        setIsShown1(current => !current);
    }
    const handleAdd2 = () => {
        setIsShown2(current => !current);
    }
    const handleAdd3 = () => {
        setIsShown3(current => !current);
    }
    const handleAdd4 = () => {
        setIsShown4(current => !current);
    }
    const handleAdd5 = () => {
        setIsShown5(current => !current);
    }

    return (
        <div class="main1">
            <div className="container">
                <div className="row" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                    <div className="col" style={{ fontSize: "50px" }}>
                        {props.Title}
                    </div>
                    <div className="col" style={{ paddingLeft: "100px", paddingTop: "30px" }}>Ocena: np. 3/5</div>
                    <div className="col"><FollowButton /></div>
                </div>
                <div className="row">
                    <div className="col" style={{ maxWidth: "fit-content" }}>
                        <img src={props.Picture} style={{ height: "300px" }} alt=""></img>
                    </div>
                    <div className="col"><h3>Język: </h3><h2>{props.Language}</h2>
                        Data wydania : {props.ReleaseDate}
                    </div>
                </div>
                <div className="row">
                    <div style={{ maxWidth: "1100px" }}>
                        {props.Description}
                    </div>
                </div>

                {check === true &&
                    <div>
                        <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd1()}>Dodaj Aktora</button>
                        {isShown1 &&
                            <div>
                                <MatchActorFilm ></MatchActorFilm>
                            </div>
                        }

                        <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd2()}>Dodaj Kategorię</button>
                        {isShown2 &&
                            <div>
                                <MatchCategoryFilm></MatchCategoryFilm>
                            </div>
                        }
                        <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd5()}>Dodaj wytwórnię</button>
                        {isShown5 &&
                            <div>
                                <AddCompany />
                            </div>
                        }
                        <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd4()}>Edytuj Film</button>
                        {isShown4 &&
                            <div>
                                <ChangeFilm />
                            </div>
                        }
                        <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd3()}>Usuń film</button>
                        {isShown3 &&
                            <div>
                                <DeleteFilm ></DeleteFilm>
                            </div>
                        }
                        
                        


                    </div>
                }
                <div className="row" style={{ paddingTop: "50px" }}>
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
                    <div className="col" style={{ paddingTop: "50px" }}>
                        <CommentList />
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "50px" }}>
                    <AddComment />
                </div>
            </div>
        </div>
    )
}
export default DetailsFilm