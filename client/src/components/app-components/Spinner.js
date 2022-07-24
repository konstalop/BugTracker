import React, { Fragment } from 'react';
import spinner from '../../misc/spinner.gif';

/**
 * Spinner for loading screens
 * @returns spinner
 */
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </Fragment>
  );
};

export default Spinner;