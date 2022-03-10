import React from 'react'

const login = () => {
  return (
      <div className="container justify-content-center d-flex">
          <form>
            <h3 className='mt-5'>Sign In</h3>
            <div className="form-group my-3">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group my-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <div className="form-group my-3">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block my-3">Submit</button>
            <p className="forgot-password text-right my-3">
                Forgot <a href="/">password?</a>
            </p>
            </form>
        </div>
    
  )
}

export default login