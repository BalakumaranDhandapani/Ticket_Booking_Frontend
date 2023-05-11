import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="login-card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className='row'>
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5" >
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Login!</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group m-2">
                                            <label>User Name</label>
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..."
                                                style={{ borderRadius: "7rem" }}
                                            />
                                        </div>
                                        <div class="form-group m-2">
                                            <label>Password</label>
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password"
                                                style={{ borderRadius: "7rem" }}
                                            />
                                        </div>
                                        <div class="form-group m-2">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input m-1" id="customCheck" />
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <Link to="/home" class="btn btn-primary btn-user btn-block">
                                            Login
                                        </Link>
                                        <hr />
                                        <div class="sc-RefOD bXPHet">
                                            <a href='/' style={{ textDecoration: "none" }}>
                                                <span class="sc-bwCtUz itrLAP">
                                                    <img alt="google logo"
                                                        src="//in.bmscdn.com/webin/common/icons/googlelogo.svg"
                                                        className='google_logo mx-2'
                                                    />
                                                </span>
                                                Continue with Google
                                            </a>
                                        </div>
                                    </form>
                                    <hr />
                                    <div class="text-center">
                                        <ul>
                                            <li className='float-left'>
                                                <Link to={"/"} style={{ textDecoration: "none" }} >Forgot Password?</Link>
                                            </li>
                                            <li className='float-right'>
                                                <Link to={"/"} style={{ textDecoration: "none" }} > New User? Let's Sign Up!</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login