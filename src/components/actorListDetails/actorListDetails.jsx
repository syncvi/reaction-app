import React, { Component } from "react";

class ActorListDetails extends Component{

    constructor() {
        super();
        this.state = {
            osoby: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/routes/Osoba/id')
            .then(res => res.json())
            .then(osoby => this.setState({ osoby }, () => console.log('Osoby fetched', osoby)))
            .catch((error) => {
                error = new Error();

            });
    }

    render() {
        return (
            <><ul class="ul">
                {this.state.osoby.map((data) => (
                    <li class="li">
                        {data.Imię}<span></span>{data.Nazwisko}
                    </li>
                ))}
            </ul></>
        );
    }
}
export default ActorListDetails;