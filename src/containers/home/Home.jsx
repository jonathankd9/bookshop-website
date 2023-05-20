import React from 'react'
import "./home.css"
import { Navbar, Footer, Readfreechapter, Article } from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>

      {/* Chapters */}
      <div className="home-chapters">
        
      </div>

      {/* Testimonials */}
      <div className="home-testimonials">

      </div>

      <Article/>
      {/* Read a Free Chapter */}
      <Readfreechapter/>
      <Footer />
      </div>
  )
}

export default Home