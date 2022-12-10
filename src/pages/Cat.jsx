import { useEffect } from 'react'
import '../components/styles/Section.css'

const Cat = () => {

    useEffect(() => {
        document.title = "Aaron Lopatin | Cat"
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="section">
            <div className="title bg-3">
                // Meow
            </div>
            <div className="container">
                <div className="content cat-img">
                    <img src="/assets/cat-1.jpg" alt="cat 1" loading="lazy" style={{ boxShadow: '12px 12px 0 #FBEC5D' }}/>
                    <img src="/assets/cat-2.jpg" alt="cat 2" loading="lazy" style={{ boxShadow: '12px 12px 0 #93ff9c' }}/>
                    <img src="/assets/cat-3.jpg" alt="cat 3" loading="lazy" style={{ boxShadow: '12px 12px 0 #ff9c9c' }}/>
                </div>
            </div>
        </section>
    )
}

export default Cat