import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../../Data/api';
import { ADD, UPLOAD } from '../../Functions/apiFunction';
import useCustomNavigation from '../../Functions/useCustomNavigation';
import tokenContext from '../../context/token/tokenContext';

export default function EditStock() {

    const tok = useContext(tokenContext);
    const token = tok.token


    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        product_id: '',
        mesurement: '',
        unit: '',
        price_per_unit: '',
        total_amount: ''
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
        const path = "/stock";
        const alert = "Stock"
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
                                        <li className="breadcrumb-item"><NavLink to="/stock">Stock </NavLink>/</li>
                                        <li className="breadcrumb-item active" aria-current="page">Edit Stock</li>
                                    </ol>
                                </nav>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="content-page-header">
                                        <h5>Edit Stock</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Product</label>
                                                <select
                                                    name="product_id"
                                                    id="product_id"
                                                    className="form-select"
                                                    required
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="-- Select Product--">
                                                        Product
                                                    </option>
                                                    <option value={1}>Milk</option>
                                                    <option value={2}>Panir</option>
                                                    <option value={3}>Dahi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Mesurement</label>
                                                <select
                                                    name="mesurement"
                                                    id="mesurement"
                                                    className="form-select"
                                                    required
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="-- Select Mesurement--">
                                                        Mesurement
                                                    </option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Unit</label>
                                                <select
                                                    name="unit"
                                                    id="unit"
                                                    className="form-select"
                                                    required
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="-- Select Unit--">
                                                        Unit
                                                    </option>
                                                    <option>Kg</option>
                                                    <option>Ltr</option>
                                                    <option>Pack</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Price</label>
                                                <input
                                                    type="number"
                                                    name="price_per_unit"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Price"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Total Amount</label>
                                                <input
                                                    type="number"
                                                    name="total_amount"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Total Amount"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="btn-path">
                                            <Link to={'/stock'} className="btn btn-cancel me-3">Back</Link>
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
