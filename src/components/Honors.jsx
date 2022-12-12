import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { honors } from '../data'
import './styles/Section.css'

const Honors = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "Aaron Lopatin | Honors"
    }, [])

    return (
        <section className="section" id="honors">
            <div className="title bg-3">
                    <Link to="/honors">
                        {`//`} HONORS
                    </Link>
            </div>
            <div className="container">
                <div className="content">
                    {honors.map((item,index) => (
                        <div className={`item${item.link ? ' item-hover' : ''}`}
                            key={`${index}-honors`}
                            style={{
                                "--color-custom":"#ff9c9c"
                            }} >
                            <a href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            >
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
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Honors