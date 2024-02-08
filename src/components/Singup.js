import React from 'react'
import logo from '../images/quote-pros-logo-large.webp';
const Singup = () => {
  return (
    <section className="account-login-section">
      <div className="account-login__blocks">
        <div className="account-login__logo-block">
          <div className="account-login__logo-wrapper">
            <a href="/">
              <img
                src={logo}
                alt="Quote Pros Logo"
                className="account-login__logo"
              />
            </a>
          </div>
        </div>

        <div className="account-login__form-block">
          <div className="account-login__form-wrapper">
            <h1 className="section-heading text-center">Create Account</h1>
            <form method="POST" action="" className="account-login__form">
              <div className="field-wrapper">
                <label htmlFor="username" className="field-label">Name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="field-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="field-wrapper">
                <label htmlFor="email" className="field-label">E-mail Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="field-input"
                  placeholder="admin@gmail.com"
                />
              </div>
              <div className="field-wrapper">
                <label htmlFor="password" className="field-label">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="field-input"
                  placeholder="••••••••"
                />
              </div>
              <button type="button" className="btn btn-primary login-form-submit">
                Sign Up
              </button>
              <div className="login-form__buttons">
                <p className="signup-button__wrap">
                  Already have an account? <a href="/login" className="text-link forgot-password">Log in</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Singup
