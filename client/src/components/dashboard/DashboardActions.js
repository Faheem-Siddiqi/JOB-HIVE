import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        {/* faheem style  */}
        <i className='fas fa-user-circle text-primary' style={{marginRight:"2px"}} /> Edit Profile
      </Link>
      {/* faheem  baki links ma style add kra ha for margin  */}
      <Link to='/add-experience' className='btn btn-light' style={{marginTop:"2px"}}>
        <i className='fab fa-black-tie text-primary' style={{marginRight:"2px"}} /> Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-light'  style={{marginTop:"2px"}}>
        <i className='fas fa-graduation-cap text-primary' style={{marginRight:"2px"}}/> Add Education
      </Link>
      <Link to='/add-portfolio' className='btn btn-light' style={{marginTop:"2px"}}>
        <i className='fas fa-briefcase text-primary' style={{marginRight:"2px"}} /> Add Portfolio
      </Link>
    </div>
  );
};

export default DashboardActions;
