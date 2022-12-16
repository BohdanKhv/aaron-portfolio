import { useEffect } from "react"
import { About, Publication, Teaching, Honors, Footer } from "../components"

const Home = () => {

  useEffect(() => {
    document.title = 'Aaron Lopatin | Poet | Teacher | Portfolio'
  }, [])

  return (
    <div>
      <About />
      <Publication />
      <Teaching />
      <Honors />
    </div>
  )
}

export default Home