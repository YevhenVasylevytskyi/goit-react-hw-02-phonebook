import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.protoType = {
  title: PropTypes.string,
};

export default Section;