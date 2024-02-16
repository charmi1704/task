import React from 'react'

function Contact() {
    return (
        <>
            <div className="form-group">
                <label>Enter Name</label>
                <input className="form-control" type="text" />
            </div>
            <div className="form-group">
                <label>Enter Email</label>
                <input className="form-control" type="email" />
            </div>
            <div className="form-group">
                <label>Comment</label>
                <textarea className="form-control" rows={3} defaultValue={""} />
            </div>
        </>
    )
}

export default Contact