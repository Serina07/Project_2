
import style from "./ContactHeader.module.css"
import classNames from 'classnames'

function ContactHeader() {
  return (
    <div>
      <div className={style.contactSection}>
        <h1>AS Cafe</h1>
        <p>Best Coffee in Town</p>
      </div>
      <div className={style.information}>
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> 123 Coffee St, Caffeine City, CC 45678
        </p>
        <p>
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <p>
          <strong>Email:</strong> contact@ascafe.com
        </p>
        <p>
          <strong>Opening Hours:</strong> Mon - Fri: 8 AM - 8 PM | Sat - Sun: 9
          AM - 10 PM
        </p>
      </div>
    </div>
  );
}

export default ContactHeader;
