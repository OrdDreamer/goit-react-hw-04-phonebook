import styles from './section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {

  return (
    <div>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
