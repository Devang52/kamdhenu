import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../../Data/api';
import { ADD, UPLOAD } from '../../Functions/apiFunction';
import useCustomNavigation from '../../Functions/useCustomNavigation';
import Multiselect from "multiselect-react-dropdown";
import tokenContext from '../../context/token/tokenContext';

export default function CreateDeliveryBoy() {

    const tok = useContext(tokenContext);
    const token = tok.token


    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        city: '',
        pincode: '',
        area: [],
        socity: [],
        customer: ''
    });
    const [selectArea, setSelectArea] = useState([]);
    const { navigateToPath } = useCustomNavigation();
    const area = [
        { area: 'New York' },
        { area: 'Los Angeles' },
        { area: 'Chicago' },
        { area: 'Houston' },
        { area: 'Phoenix' }
    ];


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value,
        });
    };
    // const handleInputChangeSelect = (e, customerId) => {
    //     const { name, checked, value } = e.target;

    //     if (name === 'area') {
    //         setData((prevValues) => {
    //             if (checked) {
    //                 return { ...prevValues, area: [...prevValues.area, customerId] };
    //             } else {
    //                 return { ...prevValues, area: prevValues.area.filter(id => id !== customerId) };
    //             }
    //         });
    //     } else {
    //         setData((prevValues) => ({
    //             ...prevValues,
    //             [name]: checked ? [customerId] : [],
    //         }));
    //     }
    // };

    const headleSubmit = async (e) => {
        e.preventDefault();
        const url = `${api}/add_cat`;
        const path = "/delivery-boy";
        const alert = "Delivery Boy"
        await ADD(token, url, data, navigateToPath, path, setLoader, alert);
    };
    console.log(data);



    const handleRemoveArea = (removedItem) => {
        const index = data.area.findIndex(id => id != removedItem.id);
        if (index == 0) {
            // Create a copy of the id_subject and subject_names arrays
            const updatedIds = [...data.area];

            // Remove the item at the found index
            updatedIds.splice(index, 1);
            console.log(updatedIds);

            // Update the course state with the modified arrays
            setData(prevState => ({
                ...prevState,
                area: updatedIds,
            }));
        }
    };

    const handleSelectArea = (selectedList) => {
        // const selectedIds = selectedList.map((item) => item.id);
        const selectedIds = selectedList.map((item) => item.area);
        setData({
            ...data,
            area: selectedIds,
        });
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
                                        <li className="breadcrumb-item"><NavLink to="/delivery-boy">Delivery Boy </NavLink>/</li>
                                        <li className="breadcrumb-item active" aria-current="page">Add Delivery Boy</li>
                                    </ol>
                                </nav>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="content-page-header">
                                        <h5>Add Delivery Boy</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Phone Number</label>
                                                <input
                                                    type="number"
                                                    name="Phone"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Phone Number"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Password"
                                                    required
                                                />
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
                                            <div className="add-form">
                                                <label> Area </label>
                                                <Multiselect
                                                    displayValue="area"
                                                    selectedValues={selectArea}
                                                    onKeyPressFn={function noRefCheck() { }}
                                                    onRemove={(removedItem) => handleRemoveArea(removedItem)}
                                                    onSearch={function noRefCheck() { }}
                                                    onSelect={(selectedList) =>
                                                        handleSelectArea(selectedList)
                                                    }
                                                    options={area}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h1>List Of Customer</h1>
                                            <div className="row mt-4">
                                                <div className="col-12 ">
                                                    <div className="table-resposnive">
                                                        <table className="table datatable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Index</th>
                                                                    <th>Select</th>
                                                                    <th>Name</th>
                                                                    <th>Address</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* {studentAttendance.map((dataa, index) => (
                                                                    <tr key={index}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{dataa.name}</td>
                                                                        <td>
                                                                            <div className="siderbar-toggle">
                                                                                Present
                                                                                <label className="switch">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        name="present"
                                                                                        defaultChecked={true}
                                                                                        onChange={(e) => handleInputChangeSelect(e, dataa.id)}
                                                                                    />
                                                                                    <span className="slider round"></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                ))} */}
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>
                                                                        <div className="siderbar-toggle">
                                                                            <label className="switch">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="present"
                                                                                    defaultChecked={true}
                                                                                // onChange={(e) => handleInputChange(e, dataa.id)}
                                                                                />
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td>Devang</td>
                                                                    <td>Isanpur</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>
                                                                        <div className="siderbar-toggle">
                                                                            <label className="switch">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="present"
                                                                                    defaultChecked={true}
                                                                                // onChange={(e) => handleInputChange(e, dataa.id)}
                                                                                />
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td>Devang</td>
                                                                    <td>Isanpur</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>
                                                                        <div className="siderbar-toggle">
                                                                            <label className="switch">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="present"
                                                                                    defaultChecked={true}
                                                                                // onChange={(e) => handleInputChange(e, dataa.id)}
                                                                                />
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td>Devang</td>
                                                                    <td>Isanpur 982585 Ahmedabad</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-path">
                                            <Link to={'/delivery-boy'} className="btn btn-cancel me-3">Back</Link>
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
