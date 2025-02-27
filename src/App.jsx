import React, { useState } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
      
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
         
          </form>
        </div>
      </div>

      {/* Panels */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Join us today and get started with your journey.</p>
            <button
              className="btn transparent" onClick={() => setSignUpMode(true)}>
              Sign up
            </button>
          </div>
         
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Already have an account? Sign in here!</p>
            <button
              className="btn transparent"
              onClick={() => setSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default App;
