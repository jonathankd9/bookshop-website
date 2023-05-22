import React from "react";
import "./home.css";
import { Navbar, Footer, Readfreechapter, Article } from "../../components";
import Ratings from "./../../assets/ratings.svg";
import TestimonialCard from "./testimonialcard/TestimonialCard";
import Chapters from "./chapters/Chapters";
import Martin from "./../../assets/Martin.png";
import James from "./../../assets/James.png";
import Christina from "./../../assets/Christina.png";

const Home = () => {
	return (
		<div>
			<Navbar />
			<h1>Home</h1>

			{/* Chapters */}
			<div className="home-chapters">
				<div className="home-chapters_container">
					<div className="primary-heading">The Chapter Includes</div>
					<hr className="home-chapters-line" />

					<div className="home-chapters_display">
						<Chapters
							chapter="01"
							title="Get Started Intro"
							text="Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful."
							pages="85pages"
							length="1 Hour 15 minutes"
						/>

						<Chapters
							chapter="02"
							title="Maintaining the Creative Arcs"
							text="Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful."
							pages="85pages"
							length="1 Hour 15 minutes"
						/>

						<Chapters
							chapter="03"
							title="Create a Massive Content"
							text="Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful."
							pages="85pages"
							length="1 Hour 15 minutes"
						/>

						<Chapters
							chapter="04"
							title="The Conclusion"
							text="Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful."
							pages="85pages"
							length="1 Hour 15 minutes"
						/>
					</div>

					{/* Downpart, Button and Short Description */}

					<button>Start a 15-Days Free Trial</button>
					<p>Short description about each chapter</p>
					<p>Have any questions? Contact us</p>
				</div>
			</div>

			{/* Testimonials */}
			<div className="home-testimonials">
				<div className="home-testimonials_container">
					<div className="home-testimonials_left">
						<div className="home-testimonials_left-heading">
							What Readers Say About The Book
						</div>

						<hr className="home-testimonials_line" />
						<p>
							If you are going to use a passage of Lorem Ipsum, you need to be
							sure there isn't anything embarrassing hidden in the middle of
							text. All the Lorem Ipsum generators.
						</p>

						<div className="home-testimonials_rating">
							<img src={Ratings} alt="ratings" />
							<p>(4.8/5)</p>
						</div>

						<div>
							<p>Overall Customer Ratings</p>
						</div>
					</div>

					<div className="home-testimonials_right">
						<div className="home-testimonials_right-left">
							<TestimonialCard
								image={Martin}
								name="Martin Phillips"
								title="&ldquo; Awesome Impact &rdquo;"
								text="All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
							/>
							<TestimonialCard
								image={James}
								name="Martin Phillips"
								title="&ldquo; Mind Blowing Words &rdquo;"
								text="All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
							/>
						</div>

						<div className="home-testimonials_right-right">
							<TestimonialCard
								image={Christina}
								name="Martin Phillips"
								title="&ldquo; Great Books Collection &rdquo;"
								text="All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
							/>
						</div>
					</div>
				</div>
			</div>

			<Article />
			{/* Read a Free Chapter */}
			<Readfreechapter />
			<Footer />
		</div>
	);
};

export default Home;
