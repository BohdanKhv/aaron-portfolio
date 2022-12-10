import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
                    <div className="item">
                        <div className="item-title">
                            <span>First Year Writing Seminar, College of Idaho</span>
                        </div>
                        <div className="item-content">
                            <div className="item-content__item">
                                <span>
                                    2021 - 2022
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>FNew England Literature Program, University of Michigan </span>
                        </div>
                        <div className="item-content">
                            <div className="item-content__item">
                                <span>
                                    2020 - 2022
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Intermediate Poetry Writing, Boise State University</span>
                        </div>
                        <div className="item-content">
                            <div className="item-content__item">
                                <span>
                                    2019 - 2021
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Introduction to Poetry Writing, Boise State University</span>
                        </div>
                        <div className="item-content">
                            <div className="item-content__item">
                                <span>
                                    2018 - 2021
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Prison Creative Arts Project, University of Michigan</span>
                        </div>
                        <div className="item-content">
                            <div className="item-content__item">
                                <span>
                                    2014 - 2015
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teaching