import React, { useState, useEffect } from 'react';
import './contact.css';

function Contact({gender, firstName, lastName, phone}) {

    // let contactGender;
    // if(gender === "male"){
    //     contactGender = '\u2642';
    // }else if (gender === "female"){
    //     contactGender = '\u2640';
    // }else{
    //     contactGender = '\u00D7';
    // }

    const [genderIcon, setGenderIcon] = useState('');

    useEffect(() => {
    if(gender === "male"){
    setGenderIcon('\u2642');
    }else if (gender === "female"){
    setGenderIcon('\u2640');
    }else{
    setGenderIcon('\u00D7');
    }
    }, [gender])

    return(
        <div className="contact">
            <span className="gender">{genderIcon}</span>
            <div className="contact-info">
                <p className="name">{firstName} {lastName}</p>
                <p>{phone}</p>
            </div>
        </div>
    )
}

export default Contact;
