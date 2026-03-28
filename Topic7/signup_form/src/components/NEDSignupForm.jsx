// NEDSignupForm.jsx
// NED University Admission Signup Form
// Banaya hai: Aisha
// Topic 7 - Forms with State

import { useState } from "react";
import "./NEDSignupForm.css"; // CSS file import karo

function NEDSignupForm() {

  // ── State variables ──
  const [userId, setUserId] = useState("");          // email input
  const [password, setPassword] = useState("");      // password input
  const [imageCode, setImageCode] = useState("");    // captcha input
  const [captcha, setCaptcha] = useState("jz5j");   // captcha display value
  const [errors, setErrors] = useState({});          // error messages object
  const [submitted, setSubmitted] = useState(false); // form submit hua ya nahi

  // ── Naya captcha generate karo ──
  const changeCaptcha = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let newCode = "";
    for (let i = 0; i < 4; i++) {
      newCode += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(newCode);   // red box update karo
    setImageCode("");      // input clear karo
  };

  // ── Validation - check karo sab fields sahi hain ──
  const validate = () => {
    const newErrors = {};

    // Email check
    if (!userId) {
      newErrors.userId = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userId)) {
      newErrors.userId = "Enter a valid email like: abc@gmail.com";
    }

    // Password check
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Captcha check
    if (!imageCode) {
      newErrors.imageCode = "Image code is required";
    } else if (imageCode !== captcha) {
      newErrors.imageCode = "Image code is wrong - check again";
    }

    return newErrors;
  };

  // ── Form submit handler ──
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload rokna

    const foundErrors = validate(); // validation run karo

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    // success
    setSubmitted(true);
  };

  return (
    <div className="ned-page">

      {/* ── NED Header ── */}
      <div className="ned-header">

        {/* Left Logo */}
        <div className="ned-logo">
          NED<br />UNIVERSITY<br />KARACHI
        </div>

        {/* Center Title */}
        <div className="ned-header-center">
          <p className="ned-header-title">
            NED UNIVERSITY OF ENGINEERING &amp; TECHNOLOGY
          </p>
          <p className="ned-header-sub">
            NEDUET UNDERGRADUATE ADMISSION SYSTEM
          </p>
        </div>

        {/* Right Logo */}
        <div className="ned-logo">
          100<br />YEARS<br />1921-2021
        </div>

      </div>

      {/* ── Main Body ── */}
      <div className="ned-body">
        <div className="ned-box">

          {/* ── LEFT SIDE - Instructions ── */}
          <div className="ned-left">
            <p className="ned-left-title">INSTRUCTIONS</p>

            <p className="ned-left-text">
              Before proceeding to online admission form, you are advised to
              read the <a href="#" className="ned-link">Guidelines</a>.
              It will help you to properly fill the form.
            </p>

            <p className="ned-left-text">
              While entering your password please ensure that you have used
              CAPS letters where required.
            </p>

            <p className="ned-left-text">
              If you will have any query, you should read the{" "}
              <a href="#" className="ned-link">FAQs</a>{" "}
              available on the admissions website. If your query is still
              unanswered then you may post your query on online help desk
              available on Admission Portal after login. You will be replied
              on same day. You don't have to call or travel to NED University
              for any query.
            </p>

            <a href="#" className="ned-link">
              GO TO ADMISSION SCHEDULE (Important Dates)
            </a>
          </div>

          {/* ── RIGHT SIDE - Signup Form ── */}
          <div className="ned-right">

            <p className="ned-signup-title">
              Please <span>Signup</span>
            </p>
            <p className="ned-sub-text">If you are not already Registered.</p>

            {/* Agar submit ho gaya toh success dikhao warna form dikhao */}
            {submitted ? (

              // ── Success message ──
              <div className="ned-success">
                ✓ Account successfully created! Welcome to NED Admission Portal.
              </div>

            ) : (

              // ── Signup Form ──
              <form onSubmit={handleSubmit}>

                {/* ── User ID field ── */}
                <div className="ned-form-group">
                  <label className="ned-label">User Id :</label>
                  <input
                    type="text"
                    placeholder="Enter email"
                    value={userId}
                    className={`ned-input ${errors.userId ? "error" : ""}`}
                    onChange={(e) => {
                      setUserId(e.target.value);
                      setErrors({ ...errors, userId: "" });
                    }}
                  />
                  {errors.userId && (
                    <p className="ned-error">{errors.userId}</p>
                  )}
                </div>

                {/* ── Password field ── */}
                <div className="ned-form-group">
                  <label className="ned-label">Password :</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    className={`ned-input ${errors.password ? "error" : ""}`}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors({ ...errors, password: "" });
                    }}
                  />
                  <p className="ned-hint">( Password is case sensitive )</p>
                  {errors.password && (
                    <p className="ned-error">{errors.password}</p>
                  )}
                </div>

                {/* ── Image Code / Captcha field ── */}
                <div className="ned-form-group">
                  <label className="ned-label">Image Code :</label>
                  <input
                    type="text"
                    value={imageCode}
                    className={`ned-input ${errors.imageCode ? "error" : ""}`}
                    onChange={(e) => {
                      setImageCode(e.target.value);
                      setErrors({ ...errors, imageCode: "" });
                    }}
                  />
                  {errors.imageCode && (
                    <p className="ned-error">{errors.imageCode}</p>
                  )}

                  {/* Captcha row */}
                  <div className="ned-captcha-row">
                    <button
                      type="button"
                      className="ned-change-btn"
                      onClick={changeCaptcha}
                    >
                      Change Code
                    </button>
                    {/* Red box mein captcha code */}
                    <div className="ned-captcha-box">{captcha}</div>
                  </div>
                </div>

                {/* ── Login button + Forgot Password ── */}
                <div className="ned-btn-row">
                  <button type="submit" className="ned-login-btn">
                    Login
                  </button>
                  <span className="ned-forgot">Forgot Password ?</span>
                </div>

              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default NEDSignupForm;
