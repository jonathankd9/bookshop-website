import React from "react";
import "./home.css";
import { Navbar, Footer, Readfreechapter, Article } from "./../../components";

// Components imports
import TestimonialCard from "./testimonialcard/TestimonialCard";
import Chapters from "./chapters/Chapters";
import Wywl from "./wywl/Wywl";
import Book from "../../components/books/Book";

// Image imports
import Ratings from "./../../assets/ratings.svg";
import Martin from "./../../assets/Martin.png";
import James from "./../../assets/James.png";
import Christina from "./../../assets/Christina.png";
import Wywlimg from "./../../assets/wywl.png";
import GetCopy from "./../../assets/getcopy.png";
import Amazen from "./../../assets/amazencorp.png";
import Megan from "./../../assets/meganbooks.png";
import Los from "./../../assets/losbooks.png";
import Urban from "./../../assets/urbanlib.png";
import Author from "./../../assets/author.png";
import QRcodeauthor from "./../../assets/qrcodeauthor.png";
import AtomicOne from "./../../assets/atomicone.png";
import DarkLightL from "./../../assets/darklightlarge.png";
import DarkLight from "./../../assets/thedarklight.png";
import Circle from "./../../assets/circle.png";

const Home = () => {
	return (
		<div>
			<Navbar />

			{/* Hero page */}
			<div className="home-hero">
				<div className="home-hero_container">
					<div className="home-hero_text">
						<div className="home-hero_welcome">
							<hr className="home-hero-line" />
							<p>Welcome to Pages</p>
						</div>

						<h1>Books are uniquely portable magic </h1>
						<p>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form.
						</p>

						<div className="home-hero_links">
							<button>Order Today</button>
							<a href="">Read Free Demo</a>
						</div>

						<div className="home-hero_plr">
							<div className="home-hero_plr-col">
								<div className="">
									<img src={Circle} alt="" />
								</div>
								<div className="home-hero_plr-column">
									<p>Pages:</p>
									<p>586pages</p>
								</div>
							</div>
							<div className="home-hero_plr-col">
								<div className="">
									<img src={Circle} alt="" />
								</div>
								<div className="home-hero_plr-column">
									<p>Length:</p>
									<p>10 Hours:</p>
								</div>
							</div>
							<div className="home-hero_plr-col">
								<div className="">
									<img src={Circle} alt="" />
								</div>
								<div className="home-hero_plr-column">
									<p>Ratings:</p>
									<p>4.5/5 (305 ratings)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="home-hero_image">
						<img src={DarkLightL} alt="" />
					</div>
				</div>
			</div>

			{/* Author books includes */}
			<div className="home-abi">
				<div className="primary-heading">Author's Books Includes</div>
				<hr className="home-chapters-line" />
				<div className="home-abi_container">
					<Book
						image={AtomicOne}
						name="Atomic's One"
						desc="Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
						pages="860 pages"
						length="10 Hours"
					/>
					<Book
						image={DarkLight}
						name="The Dark Light"
						desc="Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
						pages="860 pages"
						length="10 Hours"
					/>
				</div>
			</div>

			{/* About the author */}
			<div className="home-ata">
				<div className="home-ata_container">
					<div className="home-ata_image">
						<img src={Author} alt="" />
					</div>
					<div className="home-ata_text">
						<div className="home-ata_heading">About Author</div>
						<hr className="home-getcopy_line" />
						<p>
							All the Lorem Ipsum generators on the Internet tend to repeated
							predefined chunks as necessary, making this the first true value
							generator on the Internet. It uses a dictionary of over 200 Latin
							words, combined with a handful.
						</p>

						<table>
							<tbody>
								<tr className="row-1">
									<td>02</td>
									<td>4.5</td>
									<td>04</td>
								</tr>
								<tr className="row-2">
									<td>Books Published</td>
									<td>User Reviews</td>
									<td>Best Seller Awards</td>
								</tr>
							</tbody>
						</table>

						<div className="home-ata_qrcode">
							<div className="home_ata_qrcodeimg">
								<img src={QRcodeauthor} alt="" />
							</div>
							<div className="home-ata_qrcodetext">
								<p>John Abraham , Ph.d</p>
								<p>Mail : johnabraham@gmail.com</p>
								<p>Phone : (+2) 123 545 9000</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Trusted by the Best */}
			<div className="home-tbtb">
				<div className="home-tbtb_container">
					<div className="primary-heading">Trusted by the Best</div>
					<hr className="home-chapters-line" />
					<div className="home-tbtb_container-logos">
						<div className="tbtb-logos">
							<img src={Amazen} alt="" />
							<div className="tbtb-logos_text">
								<h3>Amazen Corp</h3>
								<p>
									A long established fact that a who looking at it's layout.
								</p>
							</div>
						</div>
						<div className="tbtb-logos">
							<img src={Megan} alt="" />
							<div className="tbtb-logos_text">
								<h3>Megan Books</h3>
								<p>
									A long established fact that a who looking at it's layout.
								</p>
							</div>
						</div>
						<div className="tbtb-logos">
							<img src={Los} alt="" />
							<div className="tbtb-logos_text">
								<h3>Los Books</h3>
								<p>
									A long established fact that a who looking at it's layout.
								</p>
							</div>
						</div>
						<div className="tbtb-logos">
							<img src={Urban} alt="" />
							<div className="tbtb-logos_text">
								<h3>Urban Lib</h3>
								<p>
									A long established fact that a who looking at it's layout.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Get a Copy of Book */}
			<div className="home-getcopy">
				<div className="home-getcopy_container">
					<div className="home-getcopy_left">
						<div className="home-getcopy_heading">Get Book Copy Today!</div>
						<hr className="home-getcopy_line" />

						<p className="home-getcopy_text">
							This the first true value generator on the Internet. It uses
							alphas dictionary of over 200 Latin words.
						</p>
						<button>Order Today</button>
					</div>
					<div className="home-getcopy_right">
						<img src={GetCopy} alt="Get copy" />
					</div>
				</div>
			</div>

			{/* What you will learn */}
			<div className="home-wywl">
				<div className="home-wywl_container">
					<div className="primary-heading">What you will learn?</div>
					<hr className="home-chapters-line" />

					<div className="home-wywl_display">
						<div className="home-wywl_display-left">
							<Wywl
								number="01"
								text="Use HDFS & Map Reduce for storing & analyzing data at scale."
							/>
							<Wywl
								number="02"
								text="Consume streaming data using Spark Streaming, Flink, and Storm."
							/>
							<Wywl
								number="03"
								text="Choose an appropriate data storage technology for your application"
							/>
							<Wywl
								number="04"
								text="Analyze non-relational data using HBase, Cassandra, and MongoDB."
							/>
						</div>

						<div className="home-wywl_display-right">
							<img src={Wywlimg} alt="What you will learn" />
						</div>
					</div>
				</div>
			</div>

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
