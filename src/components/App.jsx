import { Component } from 'react';
import SectionTitle from './Section/SectionTitle';
import Form from './Form/Form';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    handleAddContact = (newContact) => {
        const { contacts } = this.state;

        const alertContact = contacts.find(contact => contact.name === newContact.name)

        if (alertContact) {
            alert(`${newContact.name} is already in contacts`)
            return;
        } else {
            this.setState(prevState => ({
                contacts: [...prevState.contacts, newContact]
            }));
        }
    }

    handleDeleteContact = (contactID) => {
        this.setState(prevState => {
            return { contacts: prevState.contacts.filter(contact => contact.contactID !== contactID) }
        })
    }

    handleFilter = evt => {
        this.setState({ filter: evt.target.value });
    };

    render() {
        const { contacts, filter } = this.state;
        return (
            <div>
                <SectionTitle title="Phonebook">
                    <Form addContact={this.handleAddContact} />
                </SectionTitle>

                <Section subTitle="Contacts">
                    <Filter onChange={this.handleFilter} />
                    <ContactsList list={contacts} search={filter} deleteContact={this.handleDeleteContact} />
                </Section>
            </div>
        );
    }
}

export default App;
