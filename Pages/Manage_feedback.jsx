import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_feedback() {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch();
    },[]);

    //fetch data from api
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/feedback`);
        console.log(res.data);
        setData(res.data); // set data from api in data var state
    }

    //delete
    const deletehandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/feedback/${id}`);
        fetch();
    }
  return (
    <>
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        Manage_feedback
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Feedback</th>
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
                                                        <td>{value.feedback}</td>
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

export default Manage_feedback