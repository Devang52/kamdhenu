import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../../Data/api';
import { ADD, UPLOAD } from '../../Functions/apiFunction';
import useCustomNavigation from '../../Functions/useCustomNavigation';
import tokenContext from '../../context/token/tokenContext';

export default function CreateOrder() {

    const tok = useContext(tokenContext);
    const token = tok.token


    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        delivery_boy_name: '',
        customer_name: '',
        total_amount: '',
        payment_mode: '',
        address: '',
        payment_status: '',
        order_date: ''
    });
    const { navigateToPath } = useCustomNavigation();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const headleSubmit = async (e) => {
        e.preventDefault();
        const url = `${api}/add_cat`;
        const path = "/order";
        const alert = "Order"
        await ADD(token, url, data, navigateToPath, path, setLoader, alert);
    };
    console.log(data);
    return (
        <>
            {loader ||
                <div className="page-wrapper">
                    <div className="content">
                        <form>
                            <div className="row">
                                <nav aria-label="breadcrumb" style={{ '--bs-breadcrumb-divider': 'none' }}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/">Dashboard </NavLink>/</li>
                                        <li className="breadcrumb-item"><NavLink to="/Order">Order </NavLink>/</li>
                                        <li className="breadcrumb-item active" aria-current="page">POS</li>
                                    </ol>
                                </nav>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="content-page-header">
                                        <h5>POS</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Delivery Boy Name</label>
                                                <select
                                                    name="delivery_boy_name"
                                                    id="delivery_boy_name"
                                                    className="form-select"
                                                    required
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="-- Select Delivery Boy Name--">
                                                        Delivery Boy Name
                                                    </option>
                                                    <option>Hetal</option>
                                                    <option>Riddhi</option>
                                                    <option>Devang</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Customer Name</label>
                                                <select
                                                    name="customer_name"
                                                    id="customer_name"
                                                    className="form-select"
                                                    required
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="-- Select Customer Name--">
                                                        Customer Name
                                                    </option>
                                                    <option>Hetal</option>
                                                    <option>Riddhi</option>
                                                    <option>Devang</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Amount</label>
                                                <input
                                                    type="number"
                                                    name="total_amount"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Amount"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Payment Mode</label>
                                                <select
                                                    name="payment_mode"
                                                    id="payment_mode"
                                                    className="form-select"
                                                    required
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="-- Select Payment Mode--">
                                                        Payment Mode
                                                    </option>
                                                    <option>Cash</option>
                                                    <option>Online</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Address"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="btn-path">
                                            <Link to={'/order'} className="btn btn-cancel me-3">Back</Link>
                                            <button type="submit" className="btn btn-submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}
