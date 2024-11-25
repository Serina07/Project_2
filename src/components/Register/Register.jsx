import React from "react";
import styles from './Register.module.css'
import img from './../../assets/images/login.png'

const SignupPage = () => {
  console.log("signup page");

  return (
    <div className={styles.form_container}>
      
      <div className={styles.form_section}>
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </div>
      <div className={styles.imageC}> 

      <div className={styles.image}>
      <img src={img} alt="a" />

      </div>
      </div>

    </div>
  );
};

export default SignupPage;
