import { useState, useEffect, useRef } from 'react'
import './styles/Img.css'

const Img = ({img, alt, onClick, className, style}) => {
    const [isLoading, setIsLoading] = useState(true)
    const imgRef = useRef()

    useEffect(() => {
        const img = imgRef.current
        if (img && img.complete) {
            setIsLoading(false)
        } else {
            setIsLoading(true)
            img.addEventListener('load', () => setIsLoading(false))
        }
    }, [img])

    return (
        <img
            onClick={isLoading ? null : onClick ? onClick : null}
            src={img}
            alt={alt}
            ref={imgRef}
            loading="lazy"
            style={style}
            className={`img ${isLoading ? 'loading' : 'loaded'}${className ? ` ${className}` : ''}`}
        />
    )
}

export default Img