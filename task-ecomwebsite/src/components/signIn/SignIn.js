import React, { useState } from "react";
import "./SignIn.css";
import { NavLink } from "react-router-dom";
import MainLogo from "../../Images/mainLogo.png"
const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isChecked,setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle checkbox state
    };

    const handleSubmit = () => {
        if (email.trim() === "" || password.trim() === "") {
            alert("Please enter both email and password."); // Alert user if email or password is empty
            return; // Exit function early
        }
        else if (email.trim() !== "" && password.trim() !== "") {
            setIsValid(true); // Set form validity to true if email and password are not empty
            const userData = {
                email: email,
                password: password
            };
            console.log(userData); // Log user data
        } else {
            setIsValid(false); // Set form validity to false if email or password is empty
        }
    };

    function handlechange(e) {
        setPassword(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    return (
        <div>
            <div className="background-img">
                <div class="card6 container">
                    <img
            class="card-img-top1 mx-auto d-block"
            src={MainLogo}  alt="logo"
          />
                    <div class="card-body">
                        {/* <h5 class="card-title mb-3 ff">Sign In</h5> */}
                        <form>
                            <div class="form-row align-items-center">
                                <div class="col-sm-12 my-3">
                                    <input
                                        type="email"
                                        class="form-control ff"
                                        id="inlineFormInputName"
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleEmail}
                                    />
                                </div>
                                <div class="col-sm-12 my-3">
                                    <div class="input-group">
                                        <input
                                            type="password"
                                            class="form-control ff"
                                            id="inlineFormInputGroupUsername"
                                            placeholder="Password"
                                            value={password}
                                            onChange={handlechange}
                                        />
                                    </div>
                                </div>
                                <div class="col-auto my-1  d-flex justify-content-between">
                                    <div class="form-check  d-flex custom-checkbox " onClick={handleCheckboxChange}>
                                        <input
                                            type="checkbox"
                                            id="rememberMeCheckbox"
                                        />&nbsp;&nbsp;
                                        {/* <div class={`checkbox ${isChecked ? 'checked' : ''}`}></div> */}
                                        <label class="form-check-label ff remember" for="autoSizingCheck2">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className=" d-flex ff forgot-pw" style={{ color: "#0E50D3" }}>
                                        <NavLink
                                            to="/forgotPassword"
                                            className="text-decoration-none"
                                        >
                                            Forgot Password?
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="col-auto my-1 mt-3">
                                    {isValid && (
                                        <NavLink to="/home">
                                            <button type="submit" class="sign-in-btn ff">
                                                Sign In
                                            </button>
                                        </NavLink>
                                    )}
                                    {/* Render button without NavLink if form is not valid */}
                                    {!isValid && (
                                        <button type="submit" class="sign-in-btn ff" onClick={handleSubmit}>
                                            Sign In
                                        </button>
                                    )}
                                </div>
                                <div className="my-2 ff text-center text-footer">
                                    Don’t have an account?
                                    <NavLink to="/signup" className="text-decoration-none">
                                        <strong style={{ color: "#0E50D3" }} className=" text-footer"> &nbsp;Sign Up </strong>
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

export default SignIn;