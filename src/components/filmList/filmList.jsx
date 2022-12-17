import React, { Component } from "react";
import FilmItem from "../filmItem/filmItem";
import "./FilmList.css";


// const FilmListI = [
// 	{
// 		Title: "Wiedźmin",
// 		ReleaseDate: "2001",
// 		Language: "Język polski",
// 		Length: "120 min",
// 		Description: "Opis w luj dlugi ze az sie nie chce czytać",
// 		Picture: "Zdjecie dupy Zoltana",
// 	},
// 	{
// 		Title: "Wiedźmin",
// 		ReleaseDate: "2001",
// 		Language: "Język polski",
// 		Length: "120 min",
// 		Description: "Opis w luj dlugi ze az sie nie chce czytać",
// 		Picture: "Zdjecie dupy Zoltana",
// 	},
// 	{
// 		Title: "Wiedźmin",
// 		ReleaseDate: "2001",
// 		Language: "Język polski",
// 		Length: "120 min",
// 		Description: "Opis w luj dlugi ze az sie nie chce czytać",
// 		Picture: "Zdjecie dupy Zoltana",
// 	},
// ];
// function fetch() {
//     fetch('http://localhost:8080/routes/Film')
//     .then(res => res.json())
//     .then(films => this.setState({films}, () => console.log('Films fetched' , films)))
// }

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
        .then(films => this.setState({films}, () => console.log('Films fetched' , films)))
    }

	render() {
		return (
			<ul class="ul1">
				{this.state.films.map((data) => (
					<li class="li1">
						<FilmItem
                            Id = {data.Film_Id}
							Title={data.Tytuł}
							ReleaseDate={data.Data_Wydania}
							Language={data.Język}
							Length={data.Długość}
							Description={data.Opis}
							Picture={data.Zdjęcie}
						/>
					</li>
				))}
			</ul>
		);
	}
}
export default FilmList;
