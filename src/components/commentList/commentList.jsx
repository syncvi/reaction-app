import React, {Component} from "react";
import CommentItem from "../commentItem/commentItem";
import styles from './commentList.module.css'

const CommentListI = [
	{
		User: "Robert",
		Comment: "Bardzo fajny film, polecam.",
		Rating: "3/5",
	},
	{
		User: "Aneta",
		Comment: "Prawię się popłakałam",
		Rating: "2/5",
	},
	{
		User: "Michał",
		Comment: "Super!",
		Rating: "4/5",
	},
	{
		User: "Paweł",
		Comment: "Pierwszy!",
		Rating: "5/5",
	},
	
];
class CommentList extends Component {
	render() {
		return (
			<div className={styles.card_list}>
				{CommentListI.map((data) => (
					<div style={{maxWidth: "40vh"}}>
						<CommentItem
							User={data.User}
							Comment={data.Comment}
							Rating={data.Rating}
						/>
					</div>
				))}
			</div>
		);
	}
}

export default CommentList;
