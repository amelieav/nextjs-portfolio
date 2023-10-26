// components/PillTag.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from "../styles/CodeTag.module.css"

const CodeTag = ({ bgColor, textColor, text }) => {
  return (
    <div className={styles.pill} style={{ backgroundColor: bgColor, color: textColor }}>
      {text}
    </div>
  );
};

CodeTag.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CodeTag;
