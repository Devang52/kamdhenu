import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../../Data/api';
import { ADD, UPLOAD } from '../../Functions/apiFunction';
import useCustomNavigation from '../../Functions/useCustomNavigation';
import tokenContext from '../../context/token/tokenContext';

export default function EditArea() {

    const tok = useContext(tokenContext);
    const token = tok.token


    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        area: 'Isanpur',
        pincode: '321654',
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
        const path = "/area";
        const alert = "Area"
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
                                        <li className="breadcrumb-item"><NavLink to="/area">Area </NavLink>/</li>
                                        <li className="breadcrumb-item active" aria-current="page">Edit Area</li>
                                    </ol>
                                </nav>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="content-page-header">
                                        <h5>Edit Area</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Area</label>
                                                <input
                                                    type="text"
                                                    name="area"
                                                    className="form-control"
                                                    value={data.area}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Area Name"
                                                    required
                                                />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Pincode</label>
                                                <select
                                                    name="pincode"
                                                    id="pincode"
                                                    className="form-select"
                                                    required
                                                    value={data.pincode}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="-- Select Pincode--">
                                                        Pincode
                                                    </option>
                                                    <option>321654</option>
                                                    <option>852741</option>
                                                    <option>952178</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>City</label>
                                                <select
                                                    name="city"
                                                    id="city"
                                                    className="form-select"
                                                    required
                                                    value={data.city}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="-- Select City--">
                                                        City
                                                    </option>
                                                    <option>Ahmedabad</option>
                                                    <option>Ahmedabad</option>
                                                    <option>Ahmedabad</option>
                                                </select>
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
                                                            defaultChecked={true}
                                                            onChange={handleInputChange}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-path">
                                            <Link to={'/area'} className="btn btn-cancel me-3">Back</Link>
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
