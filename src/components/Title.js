import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
};

export default function Title({name, title}) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize">
          {name} <strong className="text-primary">{title}</strong>
        </h1>
      </div>
    </div>
  );
}

Title.propTypes = propTypes;