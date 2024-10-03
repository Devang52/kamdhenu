import { Link, NavLink, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../Data/api";

function Navbar() {

    const navigate = useNavigate();
    const handleLogout = () => {
        Swal.fire({
            title: "Logout",
            text: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!",
        }).then((result) => {
            if (result.isConfirmed) {
                document.cookie = `admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                navigate("/login");
            }
        });
    }


    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <>
            <div>
                <div className="header">
                    <div className="header-left">
                        <NavLink to={'/'} className="logo">
                            <img src="/assets/img/nobel2.png" alt="Logo" width="60" height="60" />
                        </NavLink>
                    </div>
                    <a onClick={handleToggle} className={isToggled ? 'navbartog mobile_btn' : 'mobile_btn'}>
                        <i className="fas fa-align-left"></i>
                    </a>
                    <div className="header-split">
                        <div className="page-headers">
                            <div className="search-bar">
                                <span><i className="fe fe-search"></i></span>
                                <input type="text" placeholder="Search" className="form-control" />
                            </div>
                        </div>
                        <ul className="nav user-menu">
                            <li className="nav-item dropdown logout-box">
                                <a href="#" onClick={handleLogout} className="user-NavLink  nav-NavLink">
                                    <span className="user-img">
                                        <i className="fa-solid fa-arrow-right-from-bracket" style={{ color: '#26448c', fontSize: '20px' }}></i>
                                        <span className="animate-circle"></span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Sidebar --> */}
                <div onClick={handleToggle} className={isToggled ? 'navbartog sidebar' : 'sidebar'} id="sidebar">
                    <div className="sidebar-header">
                        <Link to={'/'}>
                            <div className="sidebar-logo">
                                <Link to={'/'}>
                                    <img src="/assets/img/nobel2.png" className="img-fluid logo" alt="" />
                                </Link>
                                <Link to={'/'}>
                                    <img src="/assets/img/nobel2.png" className="img-fluid logo-small" alt="" />
                                </Link>
                            </div>
                        </Link>

                    </div>

                    <div className="sidebar-inner slimscroll" >
                        <div id="sidebar-menu" className="sidebar-menu">
                            <ul>
                                {/* <li className="menu-title m-0">
                                <h6>Home</h6>
                            </li> */}
                                <li>
                                    <NavLink to={'/'}>
                                        <i className="fa-solid fa-house"></i>
                                        <span>Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/customer'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Customer</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/subscription'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Subscription</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/delivery-boy'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Delivery boy</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/delivery-boy-wallet'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Delivery boy wallet</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/delivery-boy-reporting'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Delivery boy reporting</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/delivery-boy-route-management'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Delivery boy route management</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/subscription-orders'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Subscription Orders</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/other-product-orders'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Other product orders</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/cash-collection'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Cash Collection</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/payment-gateway'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Payment gateway</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/income-report'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Income Report</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/reporting-date-wise'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Reporting date wise</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/category'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Category</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/products'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Products</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/stock'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Stock</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/stock-history'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Stock History</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/order'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Order</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/paymenttransactionhistory'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Payment Transaction History</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/pincode'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Pincode</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/city'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>City</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/area'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Area</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/society'}>
                                        <i className="fe fe-briefcase"></i>
                                        <span>Society</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- /Sidebar --> */}

            </div>
        </>
    )
}

export default Navbar;
