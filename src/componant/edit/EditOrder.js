import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../../Data/api';
import { ADD, UPLOAD } from '../../Functions/apiFunction';
import useCustomNavigation from '../../Functions/useCustomNavigation';
import tokenContext from '../../context/token/tokenContext';

export default function EditOrder() {

    const tok = useContext(tokenContext);
    const token = tok.token


    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        status: '',
        payment_status: '',
        payment_details: '',
        deu_amount: ''
    });
    const { navigateToPath } = useCustomNavigation();


    const handleInputChange = (e) => {
        const { name, checked, value } = e.target;
        if (name === 'status') {
            if (checked) {
                setData({ ...data, status: 1 })
            } else {
                setData({ ...data, status: 0 })
            }
        } else if (name === 'payment_status') {
            if (checked) {
                setData({ ...data, payment_status: 1 })
            } else {
                setData({ ...data, payment_status: 0 })
            }
        } else {
            setData({
                ...data,
                [name]: value,
            });
        }
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
                                        <li className="breadcrumb-item active" aria-current="page">Edit Order</li>
                                    </ol>
                                </nav>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="content-page-header">
                                        <h5>Edit Order</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Deu Amount</label>
                                                <input
                                                    type="number"
                                                    name="deu_amount"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Deu Amount"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Payment Details</label>
                                                <input
                                                    type="text"
                                                    name="payment_details"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Payment Details"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Status</label>
                                                <div className="siderbar-toggle">
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                            name="status"
                                                            onChange={handleInputChange}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Payment Status</label>
                                                <div className="siderbar-toggle">
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                            name="payment_status"
                                                            onChange={handleInputChange}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
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
