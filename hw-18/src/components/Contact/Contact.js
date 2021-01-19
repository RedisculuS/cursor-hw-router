import React from 'react';
import './contact.css';

function Contact({gender, firstName, lastName, phone}) {

    let contactGender;
    if(gender === "male"){
        contactGender = '\u2642';
    }else if (gender === "female"){
        contactGender = '\u2640';
    }else{
        contactGender = '\u00D7';
    }

    return(
        <div className="contact">
            <span className="gender">{contactGender}</span>
            <div className="contact-info">
                <p className="name">{firstName} {lastName}</p>
                <p>{phone}</p>
            </div>
        </div>
    )
}

export default Contact;
