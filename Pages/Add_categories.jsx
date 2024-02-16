import React from 'react'
import { Helmet } from 'react-helmet'

function Add_categories() {
    return (
        <>
            <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/css/style.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

                <script src="admin/assets/js/jquery-1.10.2.js"></script>
                <script src="admin/assets/js/bootstrap.js"></script>
                <script src="admin/assets/js/custom.js"></script>


            </Helmet>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            Add Categories
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <div className="form-group">
                                    <label>Enter Category Name</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input type="file" id="img" name="img" accept="image/*"></input>
                                </div>
                                <button type="submit" className="btn btn-info">Send  </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Add_categories