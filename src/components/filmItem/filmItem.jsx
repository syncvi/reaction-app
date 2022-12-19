import React from "react";
import FollowButton from "../followButton/followButton";
import styles from "./FilmItem.module.css";
import { useNavigate } from "react-router-dom";

const FilmItem = (props) => {
	let history = useNavigate();
	const handleDetails = (props) => {
		localStorage.setItem("filmTitle", JSON.stringify(props));
		history("/filmDetails");
	};

	return (
		<div class="card">
			<div class="img">
				<img src={props.Picture} />
			</div>
			<div class="title">
				<h3>{props.Title}</h3>
			</div>
			<div class="info">
				<div class="columnleft">
					<p>Data Wydania: {props.ReleaseDate}</p>
				</div>
				<div class="columnright">
					<div class="Length">
						<p>Długość filmu: {props.Length}</p>
					</div>
				</div>
			</div>

        <button  onClick={() => handleDetails(props)}>Szczegóły</button>

		</div>
	);
};
export default FilmItem;
