// import axios from "axios";
// import React from "react";
// import { useEffect, useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import api from "../Data/api";

// function Login() {
//     function getCookie(name) {
//         const value = `; ${document.cookie}`;
//         const parts = value.split(`; ${name}=`);
//         if (parts.length === 2) return parts.pop().split(';').shift();
//         return null;
//     }
//     const adminCookie = getCookie('admin');
//     const adminData = adminCookie ? JSON.parse(decodeURIComponent(adminCookie)) : null;


//     const [loginData, setLoginData] = useState({
//         email: "",
//         password: ""
//     });
//     // axios.defaults.withCredentials = true;
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;

//         setLoginData((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };
//     const ValidateEmail = () => {
//         var validRegex =
//             /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//         return loginData.email.match(validRegex);
//     };
//     const navigate = useNavigate();
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             if (!loginData.email || !loginData.password) {
//                 Swal.fire({
//                     title: 'Please enter all data',
//                     icon: 'warning',
//                 });
//             } else if (!ValidateEmail()) {
//                 Swal.fire({
//                     type: "warning",
//                     icon: "warning",
//                     title: "Invalid Email Address",
//                 });
//             } else {
//                 const res = await axios.post(`${api}/login`, loginData);
//                 console.log(res);
//                 if (res.status === 200) {
//                     const admin = {
//                         token: res.token,
//                         name: res.data.name,
//                         email: res.data.email,
//                         fcm: res.data.fcm,
//                         phone: res.data.phone,
//                         role: res.data.role,
//                     };
//                     localStorage.setItem("userData", JSON.stringify(res.data));
//                     sessionStorage.setItem("admin", JSON.stringify(admin));

//                     const adminString = JSON.stringify(admin);

//                     // Optionally, set an expiration date for the cookie (e.g., 7 days)
//                     const days = 7;
//                     const date = new Date();
//                     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//                     const expires = `; expires=${date.toUTCString()}`;

//                     document.cookie = `admin=${encodeURIComponent(adminString)}${expires}; path=/`;
//                     Swal.fire({
//                         icon: "success",
//                         title: "Login successfully",
//                         timer: 1500,
//                     })
//                 } else {
//                     Swal.fire({
//                         title: 'Login insertion failed',
//                         icon: 'error',
//                     });
//                 }
//             }
//         } catch (err) {
//             console.error(err);
//             if (err.response && err.response.status === 400) {
//                 if (err.response.data.message === "Invalid email or password") {
//                     Swal.fire({
//                         icon: "error",
//                         title: "Invalid Email or Password",
//                     });
//                 } else {
//                     Swal.fire({
//                         icon: "warning",
//                         title: "Invalid Email or Password",
//                     });
//                 }
//             }
//         }
//     };
//     useEffect(() => {
//         if (adminData) {
//             navigate("/");
//         }
//     }, [])

//     return (
//         <>
//             <div className="main-wrapper wrapper-login">
//                 <div className="login-pages">
//                     <div className="container-fluid">
//                         <div className="row align-items-center justify-content-center">
//                             <div className="col-lg-12">
//                                 <div className="login-logo">
//                                     <img src="assets/img/nobel2.png" alt="img" />
//                                 </div>
//                             </div>
//                             <form onSubmit={handleSubmit}>
//                                 <div className="col-lg-6 col-xl-5 mx-auto">
//                                     <div className="login-wrap">
//                                         <div className="login-content">
//                                             <div className="login-contenthead text-center">
//                                                 <h5>Login</h5>
//                                             </div>
//                                             <div className="login-input">
//                                                 <div className="form-group">
//                                                     <label>E-mail</label>
//                                                     <input
//                                                         type="text"
//                                                         name="email"
//                                                         className="form-control"
//                                                         onChange={handleInputChange}
//                                                         placeholder="Enter Email"
//                                                     />
//                                                 </div>
//                                                 <div className="form-group">
//                                                     <div className="d-flex justify-content-between">
//                                                         <label>Password</label>
//                                                     </div>
//                                                     <div className="pass-group">
//                                                         <input
//                                                             type="password"
//                                                             name="password"
//                                                             className="form-control"
//                                                             onChange={handleInputChange}
//                                                             placeholder="Enter Password"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="login-button">
//                                                 <button type="submit" className="btn btn-login">Login</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }
// export default Login;


import * as React from "react";
import api from "../Data/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function Login() {
    const [isLoading, setisLoading] = React.useState(false);

    const navigate = useNavigate();
    // const handleClose = (event, reason) => {
    //     if (reason === "clickaway") {
    //         return;
    //     }
    //     setOpen(false);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const loginData = {
            email: data.get("email"),
            password: data.get("password"),
        };


        try {
            const login = await axios.post(`${api}/login`, loginData);
            const { data } = login;
            setisLoading(false);
            // setOpen(true);
            if (data.response === 200) {
                const admin = {
                    token: data.token,
                    name: data.data.name,
                    email: data.data.email,
                    fcm: data.data.fcm,
                    phone: data.data.phone,
                    role: data.data.role,
                };
                console.log(admin);
                sessionStorage.setItem("admin", JSON.stringify(admin));


                const adminString = JSON.stringify(admin);

                // Optionally, set an expiration date for the cookie (e.g., 7 days)
                const days = 7;
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                const expires = `; expires=${date.toUTCString()}`;

                document.cookie = `admin=${encodeURIComponent(adminString)}${expires}; path=/`;
                Swal.fire({
                    icon: "success",
                    title: "Login successfully",
                    timer: 1500,
                }) 
                navigate("/");
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Invalid Email Or Password",
                    timer: 1500,
                })
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="main-wrapper wrapper-login">
                <div className="login-pages">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-12">
                                <div className="login-logo">
                                    <img src="assets/img/nobel2.png" alt="img" />
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="col-lg-6 col-xl-5 mx-auto">
                                    <div className="login-wrap">
                                        <div className="login-content">
                                            <div className="login-contenthead text-center">
                                                <h5>Login</h5>
                                            </div>
                                            <div className="login-input">
                                                <div className="form-group">
                                                    <label>E-mail</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter Email"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="Email Address"
                                                        autoComplete="email"
                                                        autoFocus
                                                        color="secondary"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div className="d-flex justify-content-between">
                                                        <label>Password</label>
                                                    </div>
                                                    <div className="pass-group">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            className="form-control"
                                                            placeholder="Enter Password"
                                                            margin="normal"
                                                            required
                                                            fullWidth
                                                            label="Password"
                                                            id="password"
                                                            autoComplete="current-password"
                                                            color="secondary"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="login-button">
                                                <button type="submit" className="btn btn-login">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
