import React, { Component } from 'react';
import Contact from "./Contact";
import './contact.css';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends Component{
    
    state = {
        contacts: contacts,
        search: ''
    }

    handleSearchChange = e => {

        const filteredContacts = contacts.filter(contact => (`${contact.firstName} ${contact.lastName}`).toLowerCase().includes(e.target.value.toLowerCase()) ||
        (contact.phone).includes(e.target.value)); //|| (contact.gender).includes(e.target.value);

        this.setState({contacts: filteredContacts});
        this.setState({search: e.target.value});

    }

    render() {
        return(
            <div className="contact-post">
                <div className="search">
                    <input type="text" placeholder="Type contact you need" value={this.state.search} onChange={this.handleSearchChange}></input>
                </div>
                <p>{this.state.contacts.map((contact, i) => <Contact {...contact}/>)}</p>
                {!this.state.contacts.length && (
                <p>На жаль контактів не знайдено</p>
                )}
            </div>
        )
    }
}

export default Contacts;