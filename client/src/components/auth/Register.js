import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    // faheem
    <div className="parent " style={{  display: "flex",
     marginTop:"2%",
    
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
     }}>
      <div className='' style={{  
        backgroundColor:"white",
        borderRadius:"5px",
        padding:"1rem 1rem",
       maxWidth: "400px",
       width: "100%",
       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)"
     }}>
   {/* faheem remove section  */}
      {/* faheem class name change plus style */}
    <center>
    <h1 className="large " style={{color:"#108A00"}}>Sign Up</h1>
      <p className="lead" style={{color:"#108A00"}}>
       Create Your Account
      </p></center>  
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
          style={{ fontSize:"medium"}}  
          // faheem oper 
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
        style={{ fontSize:"medium"}}  
        // faheem oper 
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
          style={{ fontSize:"medium"}}  
          // faheem oper 
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
          style={{ fontSize:"medium"}}  
          // faheem oper 
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        {/* change of class name and add style  */}
        <input  type="submit" className="btn " style={{backgroundColor:"#108A00" ,color:"white",borderRadius:"50px" ,width:"100%",padding:"10px"}}  value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link style={{textDecoration:"underline",fontSize:"small",color:"#108A00"}} to="/login">Sign In</Link>
      </p>

   
    </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
