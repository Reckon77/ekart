import React from 'react'

const register = () => {
  return (
      <div className="container justify-content-center d-flex">

            <form>
                <h3 className="mt-5">Register</h3>
                <div className="form-group my-2">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group my-2">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group my-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group my-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block my-2">Sign Up</button>
                <p className="forgot-password text-right my-2">
                    Already registered <a href="/">sign in?</a>
                </p>
            </form>
        </div>
  
  )
}

export default register