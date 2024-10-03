import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../../Data/api';
import { ADD, UPLOAD } from '../../Functions/apiFunction';
import useCustomNavigation from '../../Functions/useCustomNavigation';
import tokenContext from '../../context/token/tokenContext';

export default function EditSociety() {
    const tok = useContext(tokenContext);
    const token = tok.token


    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        title: 'kangana ',
        area_id: 'Isanpur',
        pincode_id: '321654',
        city_id: 'Ahmedabad',
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
        const path = "/society";
        const alert = "Society"
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
                                        <li className="breadcrumb-item"><NavLink to="/society">Society </NavLink>/</li>
                                        <li className="breadcrumb-item active" aria-current="page">Edit Society</li>
                                    </ol>
                                </nav>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="content-page-header">
                                        <h5>Edit Society</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Society</label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    className="form-control"
                                                    value={data.title}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Society"
                                                    required
                                                />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Area</label>
                                                <select
                                                    name="area_id"
                                                    className="form-select"
                                                    required
                                                    value={data.area_id}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="-- Select Pincode--">
                                                        Pincode
                                                    </option>
                                                    <option>Isanpur</option>
                                                    <option>852741</option>
                                                    <option>952178</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Pincode</label>
                                                <select
                                                    name="pincode_id"
                                                    id="pincode_id"
                                                    className="form-select"
                                                    required
                                                    value={data.pincode_id}
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
                                                    name="city_id"
                                                    id="city_id"
                                                    className="form-select"
                                                    required
                                                    value={data.city_id}
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
                                            <Link to={'/society'} className="btn btn-cancel me-3">Back</Link>
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
