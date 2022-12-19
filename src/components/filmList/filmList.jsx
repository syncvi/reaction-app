import React, { Component } from "react";
import AddFilmButton from "../addFilmButton/addFilmButton";
import FilmItem from "../filmItem/filmItem";
import styles from "./filmList.module.css";

class FilmList extends Component {
    constructor() {
        super();
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/routes/Film')
            .then(res => res.json())
            .then(films => this.setState({ films }, () => console.log('Films fetched', films)))
            .catch((error) => {
                error = new Error();

            });
    }

    render() {
        return (
            <div>
                <div className={styles.form_container}>
                    <h3 style={{maxWidth: "30vh", marginRight: "0px"}}>Wyszukaj tytuł</h3>
                    <input type="text" className={styles.form_input} placeholder="Wpisz nazwę tytułu"></input>
                        <button className={styles.Button2}>Szukaj!</button>
                </div>
                <div className={styles.card_list}>
                    {this.state.films.map((data) => (
                        <>
                      
                            <div>
                            
                            <FilmItem
                            Id={data.Film_Id}
                            Title={data.Tytuł}
                            ReleaseDate={data.Data_Wydania}
                            Language={data.Język}
                            Length={data.Długość}
                            Description={data.Opis}
                            Picture={data.Zdjęcie} />
                            
                        </div>
                        
                        </>
                    ))}

                </div>
                <AddFilmButton />
            </div>
        );
    }
}
export default FilmList;
