import React from "react";
import "./chapters.css";
import Circle from "./../../../assets/circle.png";

const Chapters = ({ chapter, title, text, pages, length }) => {
	return (
		<div className="chapters-card">
			<div className="chapters-card_container">
				<div className="chapters-card_top">
					<div className="chapter-card_chapter">Chapter- {chapter}</div>

					<div className="chapter-card_title">{title}</div>
				</div>

				<div className="chapter-card_text">{text} </div>

				<div className="chapter-card_bottom">
					<div className="chapter-card_bottom-pages">
						<img src={Circle} alt="circle" />
						<p>
							Pages : <span>{pages}</span>
						</p>
					</div>

					<div className="chapter-card_bottom-length">
						<img src={Circle} alt="circle" />
						<p>
							Length : <span>{length}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chapters;
