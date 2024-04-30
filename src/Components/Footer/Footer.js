import './Footer.css'
import { useNavigate } from 'react-router-dom'

const NavButton = ({text, path}) => {
    const navigate = useNavigate()
    return(
        <button className='nav-button-footer' onClick={() => navigate(path)}>
            {text}
        </button>
    )
}


const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='Footer'>
                <h1>Site Information</h1>
                <div className='footer-nav-buttons'>
                { /* NavButtons will allow users to navigate to different pages */ }
                    <NavButton  text="Privacy Policy" path={"/PrivacyPolicy"}/>
                    <NavButton  text="Cookies" path={"/Cookies"}/>
                    <NavButton  text="About us" path={"/About-us"}/>
                    <NavButton  text="Terms and Conditions" path={"/TermsAndConditions"}/>
                    <NavButton  text="Website Accessibility" path={"/Website-Accessibility"}/>
                </div>
                <p className='company-initials'>RZA</p>
            </div>
        </div>

    )
}

export default Footer