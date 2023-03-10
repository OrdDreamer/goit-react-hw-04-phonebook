import styles from './contacts-list.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = ({ contacts, deleteContact }) => {

  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
