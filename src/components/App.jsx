
import { Filter } from "./Filter";
import { PhonebookForm } from "./PhonebookForm";
import { ContactList } from './contactList';
import Swal from 'sweetalert2'

const { Component } = require("react");

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  addContact = (dataContact) => {
    // console.log(dataContact)
    if (this.state.contacts.some(contact => contact.name === dataContact.name)) {
      Swal.fire(`${dataContact.name} is already in contacts.`)
    } else {
      this.setState(prevState => ({
        contacts:[dataContact, ...prevState.contacts]
      }))
      // console.log(this.state)  
    }
  };

  changeFilter = (ev) => {
    this.setState({filter: ev.currentTarget.value})
  };

  // Видалення контакту 
  onDelateContact = (id) => {
    // console.log(id);
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };
  
  // метод фільтрації контактів
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    // console.log(filter)
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  
  render() {
    const {filter} = this.state;

    const visibleContacts = this.getVisibleContacts();

     return (
       <div>
         <h1>Phonebook</h1>
         <PhonebookForm
           onSubmit = {this.addContact}
         />
         <h2>Contacts</h2>
          <Filter
           value= {filter}
           onChange={this.changeFilter}
         />
         <ContactList
           dataContacts={visibleContacts}
            onDelateContact = {this.onDelateContact}
         />
      </div>
    );
  };
};
