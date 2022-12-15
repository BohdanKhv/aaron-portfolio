import { useState } from 'react'
import { Img } from './'
import './styles/About.css'

const About = () => {
    const [currentImage, setCurrentImage] = useState(0)

    return (
        <div className="about">
            <div className="container">
                <div className="image-container">
                    <div className="image">
                        <Img
                            img={currentImage === 0 ? "/assets/photo-2.jpg" : "/assets/photo-1.jpg"}
                            onClick={() => setCurrentImage(currentImage === 0 ? 1 : 0)}
                            alt="Me" />
                    </div>
                </div>
                <div className="text">
                    <span>
                    <strong>Aaron Lopatin</strong> is a poet and teacher living in Brooklyn, NY. 
                    A finalist for the 2019 Snowbound Chapbook Award from Tupelo Press and semi-finalist for the 2021 Tomaž Šalamun Prize from Factory Hollow Press, his work has appeared, or is forthcoming, in the Colorado Review, Tupelo Quarterly, Yalobusha Review, Nat. Brut, The Spectacle, and elsewhere.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About