import React from "react";
import "./wywl.css";

const Wywl = ({ number, text }) => {
	return (
		<div className="wywl-card">
			<div className="wywl-number">{number}</div>
			<div className="wywl-text">{text}</div>
		</div>
	);
};
export default Wywl;
