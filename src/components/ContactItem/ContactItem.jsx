import PropTypes from 'prop-types';
import styles from './contact-item.module.css';

const ContactItem = ({ id, name, number, deleteContact }) => {

  const onDeleteContact = () => {
    deleteContact(id);
  }

  return (
    <li className={styles.item}>
      <p className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.number}>{number}</span>
      </p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
