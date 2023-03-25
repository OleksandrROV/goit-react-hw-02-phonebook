import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './form/form';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = {
      id: nanoid(),
      name: name,
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  render() {
    return (
      <>
        <ContactForm functionAdd={this.addContact} />
      </>
    );
  }
}
export default App;
