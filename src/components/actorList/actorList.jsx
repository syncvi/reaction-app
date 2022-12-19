import React, { Component } from "react";
import AddActorButton from "../addActorButton/addActorButton";
import ActorItem from "../actorItem/actorItem";
import styles from "./actorList.module.css";


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
                 <div className={styles.form_container}>
                    <h3 style={{maxWidth: "35vh", marginRight: "0px"}}>Wyszukaj osobę</h3>
                    <input type="text" className={styles.form_input} placeholder="Wpisz Imię"></input>
                        <button className={styles.Button2}>Szukaj!</button>
                </div>
                <div className={styles.card_list}>
                    {this.state.films.map((data) => (
                        <div>
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
