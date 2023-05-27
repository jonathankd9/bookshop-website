import React from "react";
import "./footer.css";
import logo from "../../assets/Logo.png";
import Points from "./Points";
import {
	GrFacebookOption,
	GrTwitter,
	GrLinkedinOption,
	GrInstagram,
} from "react-icons/gr";

const Footer = () => {
	return (
		<div className="book__footer">
			<div className="book__footer-upper">
				<div className="book__footer-logo">
					<img src={logo} alt="book logo" />

					<div className="book__footer-social">
						<div className="book__footer-social-box">
							<GrFacebookOption color="white" size={18} />
						</div>
						<div className="book__footer-social-box">
							<GrTwitter color="white" size={18} />
						</div>
						<div className="book__footer-social-box">
							<GrLinkedinOption color="white" size={18} />
						</div>
						<div className="book__footer-social-box">
							<GrInstagram color="white" size={18} />
						</div>
					</div>
				</div>

				<div className="book__footer-explore">
					<div className="book__footer-heading">Explore</div>
					<Points title="Home" />
					<Points title="About Us" />
					<Points title="Services" />
					<Points title="Appointments" />
					<Points title="Blog" />
					<Points title="Contact Us" />
				</div>

				<div className="book__footer-utility">
					<div className="book__footer-heading">Utility Pages</div>
					<Points title="Start here" />
					<Points title="Style guide" />
					<Points title="404 not found" />
					<Points title="Password protected" />
					<Points title="Licenses" />
					<Points title="Changelog" />
				</div>

				<div className="book__footer-keep">
					<div className="book__footer-heading">Keep in Touch</div>

					<div className="book_footer-heading-contact">
						<div className=".book__footer-heading-contact_details">
							<p>Address : </p>
							<p>24A Kingston St, Los Vegas NC 28202, USA.</p>
						</div>
						<div className="">
							<p>Mail : </p>
							<p> support@doctors.com</p>
						</div>
						<div className="">
							<p>Phone : </p>
							<p>(+22) 123 - 4567 - 900</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="book__footer-line" />
			<div className="book__footer-lower">
				<p>
					© Drafted by <span>Victorflow</span> - Powered by <span>Webflow</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
