import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          {/* faheem */}
          <h1 className="x-large" style={{color:"#108A00"}}>Job Hive</h1>
          <h3 className="lead">
Hard work should work
          </h3>
           {/* faheem */}
          <p className="lead" style={{color:"grey"}}>Forget the old rules. You can have the best people.
Right now. Right here</p>
          <div className="buttons">
            {/* faheem  class add app.css*/}
            <Link to="/register" className="btn signupBtn"  >
              Sign Up
            </Link>
            <Link to="/login" className="btn loginBtn" >
              Login
            </Link>
            


               {/* faheem   style.css .landing background imag p\roperty changed*/}
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
