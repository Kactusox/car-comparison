import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styles from "../style/loginStyle.module.css";
import carImage from "../img/dodge.png";

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data submitted:", formData);
    // Perform login logic here (e.g., API request)
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <h3>Car Comparison</h3>
        <h1>Sign In</h1>
        <hr />
        <p>Please Enter Your Login And Password</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              name="username"
              placeholder="Username Or Email"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.loginBtn}>
            Sign In
          </button>
          <button type="button" className={styles.googleBtn}>
            <FcGoogle className={styles.googleIcon} /> Or, sign-in with Google
          </button>
        </form>

        <p className={styles.footerText}>
          Have an account? <a href="/login">Log in!</a>
        </p>
      </div>

      <div className={styles.loginRight}>
        <img src={carImage} alt="Dodge Challenger SRT" className={styles.carImage} />
      </div>
    </div>
  );
};

export default Signin;
