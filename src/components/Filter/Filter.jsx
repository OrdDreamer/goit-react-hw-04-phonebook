import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ term, setTerm }) => (
  <div className={styles.container}>
    <input
      className={styles.searchInput}
      type="text"
      name="filter"
      placeholder="Search..."
      value={term}
      onChange={(e) => setTerm(e.currentTarget.value)}
    />
  </div>
);

export default Filter;

Filter.propTypes = {
  term: PropTypes.string.isRequired,
  setTerm: PropTypes.func.isRequired,
};
