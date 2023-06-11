import React from "react";
import "./book.css";
import Circle from "./../../assets/circle.png";

const Book = ({ image, name, desc, pages, length }) => {
	return (
		<div className="book-card">
			<div className="book-card_image">
				<img src={image} alt="" />
			</div>
			<div className="book-card_text">
				<div className="book-card_name">{name} </div>
				<div className="book-card_desc">{desc} </div>
				<div className="book-card_pnl">
					<div className="book-card_grid">
						<img src={Circle} alt="circle" />
						<div className="book-card_smallgrid">
							<h2>Pages:</h2> {pages}{" "}
						</div>
					</div>
					<div className="book-card_grid">
						<img src={Circle} alt="circle" />
						<div className="book-card_smallgrid">
							<h2>Length:</h2>
							{length}{" "}
						</div>
					</div>
				</div>
				<button>Order Today </button>
			</div>
		</div>
	);
};

export default Book;
