
import './Navbar.css';
import ReactIcon from '../images/react-logo.png'; // Import the image

function Header() {
    return (
        <header>
            <div className="left-side">
                <img src={ReactIcon} alt="React Logo" />
                <h3>ReactFacts</h3>
            </div>
            <div className="right-side">
                React Course - Project 1
            </div>
        </header>
    )
}

export default Header;