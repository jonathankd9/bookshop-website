import React from "react";
import "./testimonialcard.css";
import Ratings from "./../../../assets/ratings.svg";

const TestimonialCard = ({ image, name, title, text }) => {
	return (
		<div className="testimonial-card">
			<div className="testimonial-card_contact">
				<div className="testimonial-card_contact-top">
					<div className="testimonial-card_contact-left">
						<img className="testimonial-card_image" src={image} />
					</div>

					<div className="testimonial-card_contact-right">
						<div className="testimonial-card_name">{name} </div>
						<img
							className="testimonial-card_name-ratings"
							src={Ratings}
							alt="Ratings"
						/>
					</div>
				</div>

				<div className="testimonial-card_title">{title} </div>

				<div className="testimonial-card_text">{text}</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
