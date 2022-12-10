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
                    <div className="footer-item">
                        <Link to="/cat">
                            Townes
                        </Link>
                    </div>
                </div>
                <h5>
                    © Aaron Lopatin
                </h5>
                <small>
                    Handcrafted by <a href="https://khvorostovskyi.com" target="_blank" 
                    rel="noreferrer"
                    > Bohdan Khvorostovskyi</a>
                </small>
            </div>
        </div>
    )
}

export default Footer