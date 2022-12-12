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
                <div className="title bg-2">
                    <Link to="/publications">
                        {`//`} PUBLICATIONS
                    </Link>
                </div>
            <div className="container">
                <div className="content">
                    {publications.map((item, index) => (
                        <div className={`item${item.link ? ' item-hover' : ''}`}
                            key={`${index}-publication`}
                            style={{
                                "--color-custom":"#93ff9c"
                            }} >
                            <a href={item.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="item-title">
                                    <span>{item.title}</span>
                                </div>
                                <div className="item-content">
                                    <span>
                                        {item.content}
                                    </span>
                                    {item.link &&
                                    <small>click</small>
                                    }
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Publication