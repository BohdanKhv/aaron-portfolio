import { Link } from 'react-router-dom'
import { useEffect } from 'react'
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
                    <div className="item">
                        <div className="item-title">
                            <span>Colorado Review</span>
                        </div>
                        <div className="item-content">
                            <div className="item-content__item">
                                <span>
                                “Wren Song #2” (Forthcoming)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Apartment Poetry</span>
                        </div>
                        <div className="item-content">
                            <span>
                                <a 
                                    style={{
                                        "--color-custom": "#FBEC5D"
                                    }}
                                href="http://www.apartmentpoetry.com/" className="item-content__item">
                                    "Wren (Invocation), Wren (Convocation), Wren (Revocation)”
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Whale Road Review</span>
                        </div>
                        <div className="item-content">
                            <span>
                                <a 
                                    style={{
                                        "--color-custom": "#FBEC5D"
                                    }}
                                href="http://www.whaleroadreview.com/lopatin/" className="item-content__item">
                                    “Madaba”
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Spoon River Poetry Review</span>
                        </div>
                        <div className="item-content">
                            <span>
                                <a 
                                    style={{
                                        "--color-custom": "#FBEC5D"
                                    }}
                                href="http://srpr.org/currentIssue.php" className="item-content__item">
                                “Fragments of a Prayer: III, V, VI”
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>EcoTheo</span>
                        </div>
                        <div className="item-content">
                            <span>
                                <a 
                                    style={{
                                        "--color-custom": "#FBEC5D"
                                    }}
                                href="https://archive.ecotheo.org/i-trend-toward-smallness/" className="item-content__item">
                                “I tend toward smallness”
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Yalobusha Review</span>
                        </div>
                        <div className="item-content">
                            <span>
                                <a 
                                    style={{
                                        "--color-custom": "#FBEC5D"
                                    }}
                                href="https://yr.olemiss.edu/piece/lopatin/" className="item-content__item">
                                “[in which the jackals show their faces], [in which i try to overcome]”
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Tupelo Quarterly</span>
                        </div>
                        <div className="item-content">
                            <span>
                                <a 
                                    style={{
                                        "--color-custom": "#FBEC5D"
                                    }}
                                href="https://www.tupeloquarterly.com/fragments-of-a-prayer-i-ii-iv-by-aaron-lopatin/" className="item-content__item">
                                “Fragments of a Prayer: I, II, IV” 
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Nat. Brut</span>
                        </div>
                        <div className="item-content">
                            <span>
                                <a 
                                    style={{
                                        "--color-custom": "#FBEC5D"
                                    }}
                                href="https://www.natbrut.com/aaron-lopatin" className="item-content__item">
                                “Charity Vaunteth”
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>The Spectacle</span>
                        </div>
                        <div className="item-content">
                            <span>
                                <a 
                                    style={{
                                        "--color-custom": "#FBEC5D"
                                    }}
                                href="https://thespectacle.wustl.edu/?p=510" className="item-content__item">
                                “The Rolling Gait: a Conversation with Cole Swensen”
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publication