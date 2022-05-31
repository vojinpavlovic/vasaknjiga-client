import { NavLink } from "react-router-dom";
import * as StyleSheet from "./styles"
import Logo from 'Static/images/logo.png'

const Layout = ({logo, pretitle, title, subtitle, children}) => {
    return (
        <div className={StyleSheet.Container}>
            <div className={StyleSheet.Wrapper}>
                {logo && <img className={StyleSheet.Logo} src={Logo} alt="logo"/>}
                {pretitle && <p className={StyleSheet.PreTitle}>{pretitle}</p>}
                {title && <p className={StyleSheet.Title}>{title}</p>}
                {subtitle && <p className={StyleSheet.SubTitle}>{subtitle}</p>}
            </div>
            {children}
        </div>
    );
}

export default Layout