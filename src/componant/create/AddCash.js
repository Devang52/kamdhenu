import React from 'react'

export default function AddCash() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="cashcol">
                            <div className="content-page-header">
                                <h5 style={{ fontSize: '18px', marginTop: '0px', fontWeight: '500' }}>Select Delivery Boy</h5>
                            </div>
                            <div className="col-lg-7">
                                <div className="form-group">
                                    <select
                                        name="city_id"
                                        id="city_id"
                                        className="form-select"
                                        required
                                    // value={data.city_id}
                                    // onChange={handleInputChange}
                                    >
                                        <option value="-- Select Delivery Boy--">
                                            Select Delivery Boy
                                        </option>
                                        <option>Raj</option>
                                        <option>Aaj</option>
                                        <option>Kaj</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive">
                                        <table className="table datatable">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Delivery Boy Name</th>
                                                    <th>Cash To Collect</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>52</td>
                                                    <td>Hetal</td>
                                                    <td>5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 cashcol">
                        <div className="row">

                            <div className="col-2">
                                <label>Amount to be Collect :</label>
                            </div>
                            <div className="col-10">
                                <div className="form-group">
                                    <input
                                        type="number"
                                        name="amount"
                                        className="form-control"
                                        // onChange={handleInputChange}
                                        placeholder="Enter Amount"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-2">
                                <label>Date :</label>
                            </div>
                            <div className="col-10">
                                <div className="form-group">
                                    <input
                                        type="date"
                                        name="date"
                                        className="form-control"
                                        // onChange={handleInputChange}
                                        placeholder="Enter Details"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-2">
                                <label>Message :</label>
                            </div>
                            <div className="col-10">
                                <div className="form-group">
                                    <textarea
                                        style={{ height: '95px' }}
                                        type="text"
                                        name="message"
                                        className="form-control"
                                        placeholder="Message"
                                    />
                                </div>
                            </div>
                            <div className="btn-path">
                                <button type="submit" style={{ fontSize: '15px', padding: '5px 20px' }} className="btn btn-submit">Collect</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
