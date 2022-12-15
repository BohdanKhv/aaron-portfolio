import { useEffect } from 'react'
import { Img } from '../components'
import '../components/styles/Section.css'

const Cat = () => {

    useEffect(() => {
        document.title = "Townes | Aaron Lopatin's Cat"
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="section">
            <div className="title bg-3">
                {`// `} TOWNES
            </div>
            <div className="container">
                <div className="content cat-img">
                    <div className="cat-img-container">
                        <div className="meow">
                            <span>Townes</span>
                        </div>
                        <Img img="/assets/cat-1.jpg" alt="cat 1" style={{ boxShadow: '12px 12px 0 #FBEC5D' }}/>
                    </div>
                    <div className="cat-img-container">
                        <div className="meow">
                            <span>...Meow</span>
                        </div>
                        <Img img="/assets/cat-2.jpg" alt="cat 2" style={{ boxShadow: '12px 12px 0 #93ff9c' }}/>
                    </div>
                    <div className="cat-img-container">
                        <div className="meow">
                            <span>❤️</span>
                        </div>
                        <Img img="/assets/cat-3.jpg" alt="cat 3" style={{ boxShadow: '12px 12px 0 #ff9c9c' }}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cat