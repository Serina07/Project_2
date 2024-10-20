import React from 'react'
import Button from '../Button/Button';
import style from './ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const ContactForm = () => {
  return (
    <section className={style.container}>
      <div>
        <div className={style.contact_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL"
            icon={<MdCall fontSize="24px" />} />
        </div>
        <div className={style.mail_btn}>
          <Button text="VIA EMAIL FORM" icon={<IoMail fontSize="24px"/>} />
        </div>
        <div className={style.contact_image}></div>
      </div>
    </section>
  );
}

export default ContactForm