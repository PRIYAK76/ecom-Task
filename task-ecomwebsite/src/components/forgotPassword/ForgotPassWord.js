import React from "react";
import "../signIn/SignIn.css";
import { NavLink } from "react-router-dom";
// import MainLogo from "../../../images/main-logo.png";

const ForgotPassWord = () => {
  return (
    <div>
      <div className="background-img">
        <div class="card-forgot-pw container">
          {/* <img
            class="card-img-top1 mx-auto d-block"
            src={MainLogo}   alt="logo"
          /> */}
          <div class="card-body">
            <h5 class="card-title mb-3 ff">Forgot Password?</h5>
            <p className="text-center ff ff1">We will send you a link to reset password</p>
            <form>
              <div class="form-row align-items-center">
                <div class="col-sm-12 my-3">
                  <input
                    type="email"
                    class="form-control ff"
                    id="inlineFormInputName"
                    placeholder="Email"
                  />
                </div>
                <div class="col-auto my-3 ">
                {/* <div class="captcha">
                    <div class="spinner">
                      <label>
                        <input
                          type="checkbox"
                          onclick="$(this).attr('disabled','disabled');"
                        />
                        <span class="checkmark">
                          <span>&nbsp;</span>
                        </span>
                      </label>
                    </div>
                    <div class="text">I'm not a robot</div>
                    <div class="logo">
                      <img src="https://seeklogo.com/images/R/recaptcha-logo-B20692A07D-seeklogo.com.png" alt="logo"/>
                    </div>
                  </div> */}
                </div>
                <div class="col-auto my-1 mt-3">
                  <button type="submit" class="sign-in-btn ff">
                    Send
                  </button>
                </div>
                <div className="my-2 ff text-center text-footer">
                Back to
                  <NavLink to="/" className="text-decoration-none">
                    <strong style={{ color: "#0E50D3" }} className=" text-footer"> &nbsp;Sign In </strong>
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassWord;