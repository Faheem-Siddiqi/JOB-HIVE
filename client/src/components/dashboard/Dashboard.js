import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import { getCurrentProfile, deleteAccount,getPortfolio } from '../../actions/profile';

const Dashboard = ({
getPortfolio,
  getCurrentProfile,
  deleteAccount,

  auth: { user },
  
  profile: { profile,portfolio },

}) => {
  useEffect(() => {
    getCurrentProfile();
    getPortfolio();
  }, [getCurrentProfile, getPortfolio]);

  return (
    <section className="container">
    
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        {/* faheem remove icon */}
        Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <Portfolio education={portfolio} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
             {/* faheem emove icon  */}
              Delete My Account 
            </button>
          </div>
        </>
      ) : (
        <>
        {/* style.css change kra ha search faheem */}
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getPortfolio: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount, getPortfolio })(
  Dashboard
);
