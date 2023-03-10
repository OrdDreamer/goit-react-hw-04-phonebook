import styles from './app.module.css';
import Section from './Section/Section';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { useEffect, useState } from 'react';

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    let localContacts;
    try {
      console.log(JSON.parse(localStorage.getItem('contacts')));
      localContacts = JSON.parse(localStorage.getItem('contacts'));
    } catch (e) {
      console.log(e.message)
    }
    return localContacts?.length ? localContacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log("setItem")
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name: n, number }) => {
    const name = n.toLowerCase();

    if (contacts.find(e => e.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    const newContact = {
      name,
      number,
      id: String(+(new Date())) + Math.round(Math.random() * 100),
    };
    setContacts((prevState) => [newContact, ...prevState]);
    return true;
  };

  const deleteContact = (id) => {
    setContacts(prevState => prevState.filter(e => e.id !== id));
  };

  const changeFilter = (v) => {
    setFilter(v.toLowerCase());
  };

  const getVisibleContacts = () => {
    return contacts.filter(c =>
      c.name.includes(filter),
    );
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        color: '#010101',
        padding: '50px',
        backgroundColor: 'rgb(231, 236, 242)',
        boxSizing: 'border-box',
      }}
    >
      <div className={styles.phonebook}>
        <Section title={'Phonebook'}>
          <PhonebookForm addContact={addContact} />
        </Section>
        <Filter term={filter} setTerm={changeFilter} />
        <Section title={'Contacts List'}>
          <ContactsList contacts={getVisibleContacts()} deleteContact={deleteContact} />
        </Section>
      </div>
    </div>
  );
};
