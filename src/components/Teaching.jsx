import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { teaching } from '../data'
import './styles/Section.css'

const Teaching = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "Aaron Lopatin | Teaching"
    }, [])

    return (
        <section className="section" id="teaching">
                <div className="title bg-2">
                    <Link to="/teaching">
                        // Teaching
                    </Link>
                </div>
            <div className="container">
                <div className="content">
                    { teaching.map((item, index) => (
                        <div className="item" key={`${index}-teaching`}>
                            <div className="item-title">
                                <span>{item.title}</span>
                            </div>
                            <div className="item-content">
                                <div className="item-content__item">
                                    <span>
                                        {item.content}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Teaching