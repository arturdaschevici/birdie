import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="notification is-danger">
      Error: {message}
    </div>
  );
};

export default Error;
