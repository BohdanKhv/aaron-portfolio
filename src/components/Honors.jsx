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
                        <div className="item" key={`${index}-honors`}>
                            <div className="item-title">
                                <span>{item.title}</span>
                            </div>
                            <div className="item-content">
                                <div className="item-content__item">
                                    <span>
                                        {item.link ? 
                                        
                                    <a style={{
                                        "--color-custom":"#ff9c9c"
                                    }} href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                        {item.content}
                                    </a>
                                    : item.content}
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

export default Honors