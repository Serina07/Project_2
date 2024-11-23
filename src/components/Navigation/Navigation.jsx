import style from "./Navigation.module.css"
import { Link } from "react-router-dom"
import classNames from 'classnames'

function Navigation() {
  return (

    <>
     <nav className= {classNames(style.navigation, style.container)}>
        <div className={style.logo}>
            <img src="/images/LasLogo.png" alt="logo" />
        </div>
        <div className={style.navBar}>
            <ul>
                <li ><Link className={style.this_page} to="/">Home</Link></li>
                <li ><Link className={style.this_page} to="/cat">Categories</Link></li>
                <li ><Link className={style.this_page} to="/abt">About Us</Link></li>
                <li > <Link className={style.this_page} to="/contactUs">Contact Us</Link></li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className={style.button}>
            <button className={style.login}>
                Login
            </button>
            <button className={style.signup}>
                Sign Up
            </button>
        </div>
       
    </nav>
    <hr />
    </>
   
    
    
  )
}

export default Navigation