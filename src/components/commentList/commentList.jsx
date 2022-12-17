import React, {Component} from "react";
import CommentItem from "../commentItem/commentItem";

const CommentListI = [
	{
		User: "user1",
		Comment: "Opis w luj dlugi ze az sie nie chce czytać",
		Rating: "3/5",
	},
	{
		User: "user2",
		Comment: "Opis w luj dlugi ze az sie nie chce czytać",
		Rating: "2/5",
	},
	{
		User: "user3",
		Comment: "Opis w luj dlugi ze az sie nie chce czytać",
		Rating: "4/5",
	},
	{
		User: "user4",
		Comment: "Opis w luj dlugi ze az sie nie chce czytać Opis w luj dlugi ze az sie nie chce czytać",
		Rating: "5/5",
	},
	{
		User: "user5",
		Comment: "Opis w luj dlugi ze az sie nie chce czytać",
		Rating: "5/5",
	},
	{
		User: "user6",
		Comment: "Opis w luj dlugi ze az sie nie chce czytać",
		Rating: "4/5",
	},
	{
		User: "user7",
		Comment: "Opis w luj dlugi ze az sie nie chce czytać",
		Rating: "2/5",
	},
	{
		User: "user8",
		Comment: "Opis w luj dlugi ze az sie nie chce czytać",
		Rating: "1/5",
	},
];
class CommentList extends Component {
	render() {
		return (
			<ul class="ul1">
				{CommentListI.map((data) => (
					<li class="li1">
						<CommentItem
							User={data.User}
							Comment={data.Comment}
							Rating={data.Rating}
						/>
					</li>
				))}
			</ul>
		);
	}
}

export default CommentList;
