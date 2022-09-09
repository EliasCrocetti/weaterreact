// hook para obtener las traducciones
import { useTranslation } from 'react-i18next';


const NavBar = () => {
    const [t, i18n] = useTranslation("global");

    const changeLanguaje = (e) => {
        let {name, value} = e.target;
        
        if (value === 'es') {
            i18n.changeLanguage("es")
        } 
        if (value === 'en') {
            i18n.changeLanguage("en")
        }
    }
    return (
        <nav className="navbar bg-dark text-light mb-5" >
            <div className="container-fluid">
                <h3 className="mx-auto">
                    {t("weather.g-weather")}
                </h3>

                <select name="languajes" onChange={changeLanguaje} onBlur={changeLanguaje} >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
        </nav>
    );
}

export default NavBar;
