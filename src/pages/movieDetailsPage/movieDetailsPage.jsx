import React,{useState, useEffect} from'react'
import FollowButton from '../../components/followButton/followButton';
import CommentList  from '../../components/commentList/commentList'
import AddComment from '../../components/addComment/addComment';

const DetailsFilm = () =>{
    const [props, setProps] = useState("");
    useEffect(() =>{
        var retrievedObject = localStorage.getItem('filmTitle');
        console.log(JSON.parse(retrievedObject))
        setProps(JSON.parse(retrievedObject))
    },[])
    
    return(
        <div class="main1">
        <div className="container">
            <div className="row" style={{paddingTop:"30px", paddingBottom:"30px"}}>
                <div className="col" style={{fontSize:"50px"}}>
                    {props.Title}
                </div>
                <div className="col" style={{paddingLeft:"100px", paddingTop:"30px"}}>Ocena: np. 3/5</div>
                <div className="col"><FollowButton /></div>
            </div>
            <div className="row">
                <div className="col" style={{maxWidth:"fit-content"}}>
                    <img src={props.Picture} style={{height:"300px"}} alt=""></img>
                </div>
                <div className="col"><h3>Język: </h3><h2>{props.Language}</h2>
                    Data wydania : {props.ReleaseDate}
                </div>
            </div>
            <div className="row">
                <div style={{maxWidth:"1100px"}}>
                    {props.Description}
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
            <div className="row" style={{paddingTop:"50px"}}>
                <AddComment />
            </div>
        </div>
        </div>
    )
}
export default DetailsFilm