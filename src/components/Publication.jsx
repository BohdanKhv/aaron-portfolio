import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { publications } from '../data' 
import './styles/Section.css'

const Publication = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "Aaron Lopatin | Publications"
    }, [])

    return (
        <section className="section" id="publication">
                <div className="title bg-1">
                    <Link to="/publications">
                        // Publications
                    </Link>
                </div>
            <div className="container">
                <div className="content">
                    {publications.map((item, index) => (
                    <div className="item" key={`${index}-publication`}>
                        <div className="item-title">
                            <span>{item.title}</span>
                        </div>
                        <div className="item-content">
                            <span>
                                {item.link ? 
                                    <a 
                                        style={{
                                            "--color-custom": "#FBEC5D"
                                        }}
                                    href={item.link} className="item-content__item"
                                    target="_blank"
                                    rel="noreferrer">
                                        {item.content}
                                    </a>
                                :
                                    item.content
                                }
                            </span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Publication