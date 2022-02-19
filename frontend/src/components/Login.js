import {React,useContext} from "react";
import Nurse from '../media/images/Nurse.jpeg';
import '../CSS/Login.css';
import Auth from "../context/auth";


function Login() {
    let {loginuser}=useContext(Auth)
    return ( 
 
<>
    
    <section class="h-100" id="login">
                <div class="container h-100 opacity-0.4;">
                    <div class="row justify-content-md-center h-100 ">
                        <div class="card-wrapper">
                            <div class="brand">
                                <img src={Nurse} alt="logo" />
                            </div>
                            <div class="card fat" />
                                <div class="card-body">
                                    <h4 class="card-title">تسجيل الدخول</h4>
                                    <form method="post" class="my-login-validation" novalidate onSubmit={loginuser}>
                                        <div class="form-group">
                                            <label for="email">اسم المسنخدم</label>
                                            <input id="email" type="text" class="form-control" name="username" required  />
                                            <div class="invalid-feedback">
                                                من فضلك ادخل بريد ألكتروني صحيح
                                            </div>
                                        </div>

                                        <div class="form-group" />
                                            <label for="password">كلمة السر

                                            </label>
                                            <input id="password" type="password" class="form-control" name="password" required data-eye />
                                            <div class="invalid-feedback">
                                                يجب ادخال كلمة السر
                                            </div>
                                       

                                        <div class="form-group"/>
                                            <div class="custom-checkbox custom-control">
                                                <input type="checkbox" name="remember" id="remember" class="custom-control-input" />
                                                <label for="remember" class="custom-control-label">تذكرني
                                                    <a href="forgot.html" class="float-right">
                                                        هل نسيت كلمة السر ؟
                                                    </a>
                                                </label>
                                            </div>
                                      

                                        <div class="form-group m-0" />
                                            <input type="submit" class="btn btn-primary btn-block" value="تسجيل الدخول"/>
                                                
                                                  
                                    </form>
                              
                            

                        </div>
                        </div>
                    </div>
                </div>
    
    
    </section>
    
    
    
 
     </>
     );
}

export default Login;