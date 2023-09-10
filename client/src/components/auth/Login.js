import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    // faheem
    <div className="parent " style={{  display: "flex",
    marginTop:"2.5%",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
     }}>
      <div className='' style={{  
        backgroundColor:"white",
        borderRadius:"5px",
        padding:"3rem 2rem",
       maxWidth: "400px",
       width: "100%",
       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)"
     }}>

      {/* remove section */}
 
    
         {/* class name ko del krke tyle ma add kra */}
         <center>
         <h2 className="large" style={{color:"#108A00"}}>Sign In</h2>
         <p className="lead" style={{color:"#108A00"}}>
        Sign Into Your Account
      </p>
         </center>
     
      

      
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
// faheem
            style={{ fontSize:"medium",}}   
          />
        </div>
        <div className="form-group">
          <input
       
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            // faheem
            style={{ fontSize:"medium"}}   
            minLength="6"
          />
        </div>
        {/* faheem  ADD HOVER TO IT*/}
        <input type="submit"    style={{backgroundColor:"#108A00" ,color:"white",borderRadius:"50px" ,width:"100%",padding:"10px"}} className="btn " value="Login" />
      </form>
      {/* faheem */}
      <p className="my-1" >
        Don't have an account? <Link style={{color:"#108A00" ,fontSize:"small",textDecoration:"underline"}} to="/register">Sign Up</Link>
      </p>
      {/* faheem */}
      <p className="my-1">
        Forget Password? <Link style={{color:"#108A00",fontSize:"small",textDecoration:"underline" }} to="/forget">Forget</Link>
      </p>

    </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
