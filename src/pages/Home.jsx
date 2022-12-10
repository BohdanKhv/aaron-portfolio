import { useEffect, useState } from "react"
import { Nav, Header, About, Publication, Teaching, Honors, Footer } from "../components"

const Home = () => {

  return (
    <div>
      <Header/>
      <Nav />
      <About />
      <Publication />
      <Teaching />
      <Honors />
      <Footer />
    </div>
  )
}

export default Home