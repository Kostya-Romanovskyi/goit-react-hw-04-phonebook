import { useState, useEffect } from 'react';
import SectionTitle from './Section/SectionTitle';
import Form from './Form/Form';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import onGetLocal from './getLocal'


const App = () => {

    const [contacts, setContacts] = useState(onGetLocal)
    const [filter, setFilter] = useState('')

    const handleAddContact = (newContact) => {

        const alertContact = contacts.find(contact => contact.name === newContact.name)

        if (alertContact) {
            alert(`${newContact.name} is already in contacts`)
            return;
        } else {
            setContacts([...contacts, newContact]);
        }
    }

    const handleDeleteContact = (contactID) => {
        setContacts(contacts.filter(contact => contact.contactID !== contactID)
        )
    }

    const handleFilter = evt => {
        setFilter(evt.target.value);
    };


    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])


    return (
        <div>
            <SectionTitle title="Phonebook">
                <Form addContact={handleAddContact} />
            </SectionTitle>

            <Section subTitle="Contacts">
                <Filter onChange={handleFilter} />
                <ContactsList list={contacts} search={filter} deleteContact={handleDeleteContact} />
            </Section>
        </div>
    );

}

export default App;
