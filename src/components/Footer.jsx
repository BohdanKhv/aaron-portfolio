import { Link } from 'react-router-dom'
import './styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-title">
                    // Contacts
                </div>
                <div className="footer-items">
                    <div className="footer-item">
                        <a href="mailto:
                        ">email.@gmail.com</a>
                    </div>
                </div>
                <h5>
                    © Aaron Lopatin
                </h5>
            </div>
            <div className="cat">
                <Link to="/cat">
                    <img src="/assets/cat.png" alt="cat" />
                </Link>
            </div>
        </div>
    )
}

export default Footer