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
            .then(films => this.setState({ films }, () => console.log('Films fetched', films)))
    }



    render() {
        return (


            <div>
                <div className="card-list">
                    {this.state.films.map((data) => (
                        <div class="card">
                            <ActorItem
                                Name={data.Imię}
                                Surname={data.Nazwisko}
                                Birthday={data.Data_Urodzenia}
                                Country={data.Kraj_Pochodzenia}
                                Picture={data.Zdjęcie} />
                        </div>
                    ))}
                </div>

                <AddActorButton />
            </div>
        );
    }
}
export default ActorList;
