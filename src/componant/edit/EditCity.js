import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../../Data/api';
import { ADD, UPLOAD } from '../../Functions/apiFunction';
import useCustomNavigation from '../../Functions/useCustomNavigation';
import tokenContext from '../../context/token/tokenContext';

export default function EditCity() {

    const tok = useContext(tokenContext);
    const token = tok.token


    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        city: 'Ahmedabad',
        status: 1
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
        const path = "/category";
        const alert = "Category"
        await ADD(token, url, data, navigateToPath, path, setLoader, alert);
    };
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
                                        <li className="breadcrumb-item"><NavLink to="/city">City </NavLink>/</li>
                                        <li className="breadcrumb-item active" aria-current="page">Edit City</li>
                                    </ol>
                                </nav>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="content-page-header">
                                        <h5>Edit City</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    className="form-control"
                                                    value={data.city}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter City Name"
                                                    required
                                                />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label>Status</label>
                                                <div className="siderbar-toggle">
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                            name="status"
                                                            defaultChecked={true}
                                                            onChange={handleInputChange}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-path">
                                            <Link to={'/city'} className="btn btn-cancel me-3">Back</Link>
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
