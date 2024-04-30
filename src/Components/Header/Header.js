import { useNavigate } from 'react-router-dom'
import './Header.css'
import Logo from '../../Assets/Logo.PNG'
import ProfileIcon from '../../Assets/ProfileIcon.PNG'


const NavButton = ({text, path}) => {
    const navigate = useNavigate()
    return(
        <button className='nav-button' onClick={() => navigate(path)}>
            {text}
        </button>
    )
}

const Header = () => {
    return(
        <div className='nav'>
            <div className='container'>
                <div className='logo'>
                    <button> <img className='logo' src={Logo} width={200} /> </button>
                </div>
                { /* NavButtons will allow users to navigate to different pages */ }
                    <ul className='nav-bar'>
                        <li className='button'>
                            <NavButton text="WHAT'S HERE" path={"/AboutUs"}/>
                        </li>
                        <li className='button'>
                            <NavButton text="OUR HOTEL" path={"/HotelBooking"}/>
                        </li>
                        <li className='button'>
                            <NavButton text="EDUCATIONAL VISITS" path={"/EducationalVisits"}/>
                        </li>
                        <li className='button'>
                            <NavButton text="ZOO TICKETS" path={"/ZooBooking"}/>
                        </li> 
                        <li className='button'>
                            <NavButton text="REWARD SCHEME" path={"/RewardScheme"}/>
                        </li>                            
                    </ul>
                    <div className='profile-secion'>
                        <div className='login-button'>
                            <img className='profile-icon' src={ProfileIcon} width={70}/>
                            <h2 className="login-button-text"><NavButton text= "Login" path={"/Login"}/></h2>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header