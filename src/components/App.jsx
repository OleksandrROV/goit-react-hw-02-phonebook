import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addSubmitUserData = values => {
    values.id = nanoid();
    if (this.checkContacts(this.state.contacts, values)) {
      return alert(`${values.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [values, ...prevState.contacts],
    }));
  };

  checkContacts = (contacts, values) => {
    return contacts.find(contact => contact.name === values.name.trim());
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    // Filter
    const filteredContacts = this.getVisibleContacts();

    return (
      <div style={{ marginLeft: '150px', marginTop: '50px'}}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addSubmitUserData} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
