import './ToggleTheme.css';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch'; 



export const ThemeContext = createContext(null);


// Component to toggle between 'light' and 'dark' themes
const ToggleTheme = () => {
    const [theme, setTheme] = useState("dark");

    // Function to toggle the current theme between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme((curr) =>(curr === "light" ? "dark" : "light"));
    };

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className='theme' id={theme}>
                <div className='switch'>
                    <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> 
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ToggleTheme;

