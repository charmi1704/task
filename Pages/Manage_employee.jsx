import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Manage_employee() {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch();
    },[]);

    //fetch data from api
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/employee`);
        console.log(res.data);
        setData(res.data); // set data from api in data var state
    }

    //delete
    const deletehandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/employee/${id}`);
        fetch();
    }
    return (
        <>
           
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        Manage_employee
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Mobile</th>
                                            <th>Image</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            data.map((value, index, arr) => {

                                                return(
                                        <tr className="odd gradeX">
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.password}</td>
                                            <td>{value.mobile}</td>
                                            <td><img src={value.img} style={{ height: "50px", maxWidth: '100%' }} ></img></td>
                                            <td>{value.status}</td>
                                            <td className='center'>
                                                <button className='btn btn-danger' onClick={() => deletehandle(value.id)}>Delete</button>
                                                <button className='btn btn-primary'>Edit</button>
                                            </td>
                                        </tr>
                                                )
                                     })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Manage_employee