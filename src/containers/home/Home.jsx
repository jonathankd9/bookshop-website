import React from 'react'
import "./home.css"
import { Navbar, Footer, Readfreechapter, Article } from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>

      {/* Read a Free Chapter */}
      <Article/>
      <Readfreechapter/>
      <Footer />
      </div>
  )
}

export default Home