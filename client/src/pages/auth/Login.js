import React from 'react';
import InputType from '../../components/shared/Helper/InputType';
//import InputType from '../../components/shared/form/InputType';
const Login = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-8 form-banner'>
          <img src="./assets/images/banner1.jpg" alt="loginImage" />
        </div>

        <div className='col-md-4 form-container'>
          <div className="logo-container text-center mb-4">
            <img src="./assets/images/logo.png" alt="Logo" className="logo" />
          </div>

          <form>
          <InputType></InputType>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
