import './styles/Section.css'

const Honors = () => {
    return (
        <section className="section" id="honors">
            <div className="title bg-3">
                // Honors
            </div>
            <div className="container">
                <div className="content">
                    <div className="item">
                        <div className="item-title">
                            <span>(semi-finalist) Verse / Tomaž Šalamun Prize, Factory Hollow Press</span>
                        </div>
                        <div className="item-content">
                            <div className="item-content__item">
                                <span>
                                    2021
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>(finalist) Snowbound Chapbook Contest, Tupelo Press</span>
                        </div>
                        <div className="item-content">
                            <div className="item-content__item">
                                <span>
                                    <a style={{
                                        "--color-custom":"#ff9c9c"
                                    }} href="https://www.tupelopress.org/2019/06/07/tupelo-press-announces-the-results-of-the-2019-snowbound-chapbook-award/">
                                        2019
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <span>Editor's Choice, Nat. Brut</span>
                        </div>
                        <div className="item-content">
                            <div className="item-content__item">
                                <span>
                                    <a style={{
                                        "--color-custom":"#ff9c9c"
                                    }} href="https://www.tupelopress.org/2019/06/07/tupelo-press-announces-the-results-of-the-2019-snowbound-chapbook-award/">
                                        2019
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Honors