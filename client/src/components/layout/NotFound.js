import React from 'react';

const NotFound = () => {
  return (

    <section className="container">
      {/* faheem class name change */}
      <h1 className="lead text-primary">
        <i className="fas fa-exclamation-triangle" /> Page Not Found
      </h1>
        {/* faheem class name change */}
      <p className="lead">Sorry, this page does not exist</p>
    </section>
  );
};

export default NotFound;
