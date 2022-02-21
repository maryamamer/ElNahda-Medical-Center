import { React, useContext } from "react";
import '../CSS/Login.css';

/* import { React, useContext } from "react";
import Nurse from '../media/images/Nurse.jpeg';
import '../CSS/Login.css';*/

import Auth from "../context/auth";

import Nurse from '../media/images/Nurse.jpeg';
import '../CSS/Login.css';
import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';
/*
function Login() {
    let { loginuser } = useContext(Auth)*/
const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    /* let { user } = useContext(Auth)
    user ?  <Redirect to='/' /> : <Redirect to='/login' /> */

    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    return (

        <>


            <section className="h-100" id="login">
                <div className="container h-100 opacity-0.4;">
                    <div className="row justify-content-md-center h-100 ">
                        <div className="card-wrapper">
                            <div className="brand">
                            <h4 className="card-title text-dark">تسجيل الدخول</h4>
                            </div>
                            <div className="card-body">
                                
                                <form method="post" className="my-login-validation" novalidate onSubmit={loginuser}>
                                    <div className="form-group ">
                                        <label for="email" className=" text-light">اسم المسنخدم</label>
                                        <input id="email" type="email" className="form-control" name="email" required />
                                        <div className="invalid-feedback">

                                            من فضلك ادخل بريد ألكتروني صحيح
                                        </div>
                                    </div>

                                    <div className="form-group " />
                                    <label for="password" className=" text-light">كلمة السر

                                    </label>

                                    <input id="password" type="password" className="form-control" name="password" required data-eye />
                                    <div className="invalid-feedback">

                                        يجب ادخال كلمة السر
                                    </div>


                                    <div className="form-group" />
                                    <div className="custom-checkbox custom-control">
                                        <input type="checkbox" name="remember" id="remember" className="custom-control-input" />
                                        <label for="remember" className="custom-control-label text-light">تذكرني
                                            <a href="forgot.html" className="float-right">
                                                هل نسيت كلمة السر ؟
                                            </a>
                                        </label>
                                    </div>


                                    <div className="form-group m-0" />
                                    <input type="submit" className="btn btn-primary btn-block" value="تسجيل الدخول"  />


                                </form>
                                {/* {
                                    isAuthenticated ? (<Redirect to='/' />) : (<div style= {{color:"red"}}>هذا المستخدم غير موجود </div>)
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

/* export default Login; */

