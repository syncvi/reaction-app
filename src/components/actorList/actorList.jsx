import React, { Component } from "react";
import AddActorButton from "../addActorButton/addActorButton";
import ActorItem from "../actorItem/actorItem";
import "./actorList.css";


class ActorList extends Component {
    constructor() {
        super();
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/routes/Osoba')
        .then(res => res.json())
        .then(films => this.setState({films}, () => console.log('Films fetched' , films)))
    }

    

	render() {
		return (
                                                                                                      
            
			<><ul class="ul1">
                {this.state.films.map((data) => (
                    <li class="li1">
                        <ActorItem
                            Name={data.Imię}
                            Surname={data.Nazwisko}
                            Birthday={data.Data_Urodzenia}
                            Country={data.Kraj_Pochodzenia}
                            Picture={data.Zdjęcie}/>
                    </li>
                ))}
            </ul>
            <AddActorButton />
            </>
		);
	}
}
export default ActorList;
