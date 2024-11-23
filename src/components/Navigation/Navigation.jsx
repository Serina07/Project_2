import style from "./Navigation.module.css"
<<<<<<< HEAD
import { Link } from "react-router-dom"
=======
>>>>>>> e10d247a3673798088de53593f13238f89f56d0a
import classNames from 'classnames'

function Navigation() {
  return (
<<<<<<< HEAD

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
=======
    <nav className= {classNames(style.navigation, style.container)}>
        <div className={style.logo}>
            <img src="/images/CafeLogo.png" alt="logo" />
        </div>
        <div className={style.navBar}>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Career</li>
>>>>>>> e10d247a3673798088de53593f13238f89f56d0a
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
<<<<<<< HEAD
       
    </nav>
    <hr />
    </>
   
    
    
=======
    </nav>
>>>>>>> e10d247a3673798088de53593f13238f89f56d0a
  )
}

export default Navigation