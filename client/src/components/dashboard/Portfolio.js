import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePortfolio } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Portfolio = ({ education, deletePortfolio }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.title}</td>
      <td>{edu.link}</td>
      
      <td>
        <button
          onClick={() => deletePortfolio(edu._id)}
          // faheem class name 
          className="btn btn-primary"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Portfolio</h2>
      <table className="table">
        <thead>
          <tr>
            {/* faheem add style in two */}
            <th  style={{textAlign:"center"}}>Title</th>
            <th   style={{textAlign:"center"}} >Link</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Portfolio.propTypes = {
  education: PropTypes.array.isRequired,
  deletePortfolio: PropTypes.func.isRequired
};

export default connect(null, { deletePortfolio })(Portfolio);
