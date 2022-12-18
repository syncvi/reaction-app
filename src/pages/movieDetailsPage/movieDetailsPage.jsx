import React, { useState, useEffect } from 'react'
import FollowButton from '../../components/followButton/followButton';
import CommentList from '../../components/commentList/commentList'
import AddComment from '../../components/addComment/addComment';
import MatchActorFilm from "../../components/matchActorFilm/matchActorFilm"
import MatchCategoryFilm from "../../components/matchCategoryFilm/matchCategoryFilm"
import AddCompany from "../../components/addCompany/addCompany"
import DeleteFilm from "../../components/deleteFilm/deleteFilm"
import ChangeFilm from "../../components/changeFilm/changeFilm"
import ActorListDetails from '../../components/actorListDetails/actorListDetails';

const DetailsFilm = () => {
    const [props, setProps] = useState("");
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    var check = false
    var checkLogged = false
    if (userInfo !== null) checkLogged = true
    if (checkLogged && (userInfo.TypKonta === 'Moderator' || userInfo.TypKonta === 'Administrator')) check = true
    else check = false
    useEffect(() => {
        var retrievedObject = localStorage.getItem('filmTitle');
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
                </div>
                <div className="row">
                    <div className="row">
                        <div className="col" style={{ maxWidth: "fit-content" }}>
                            <img src={props.Picture} style={{ height: "300px" }} alt=""></img>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col" style={{ minWidth: "75vh" }}>
                                    <h3>Język: {props.Language}</h3>
                                    Data wydania : {props.ReleaseDate}
                                    <div className="row" style={{ paddingTop: "1vh" }}>
                                <div style={{ maxWidth: "1100px" }}>
                                    Opis: {props.Description}
                                </div>
                            </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "3vh" }}>Ocena: np. 3/5
                                    <div className="col" style={{ paddingTop: "1vh" }}><FollowButton />
                                    </div>
                                    <div className="col">
                                        <ActorListDetails/>
                                    </div>
                                </div>
                            </div>          
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
                {check === true &&
                    <div>
                        <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd1()}>Dodaj Osobę</button>
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

                    <div className="col" style={{ paddingTop: "50px" }}>
                        <CommentList />
                    </div>
                </div>
                {checkLogged &&
                <div className="row" style={{ paddingTop: "50px" }}>
                <AddComment />
            </div>}
                
            </div>
        </div>
    )
}
export default DetailsFilm