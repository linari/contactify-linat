import React, { useState, useEffect } from 'react';
import userpic from './images/userpic.jpg';
import './css/ContactData.css';
import axios from 'axios';

function ContactData({ userID }) {
  /* Fetching data for particular contact from api */
  const url = 'https://contactify-api.herokuapp.com/api/contacts/5da45211e8f6549a53095f00';
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setContact(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
      return <div className="error-message">It seems that something is wrong... <i class="far fa-sad-tear"></i></div>
    })
  }, [url]);

  if (loading) {
    return <div className="loading-layer"><i className="fas fa-spinner fa-pulse"></i></div>
  }

  const name = contact.name + ' ' + contact.surname.charAt(0) + '.';

  return (    
    <div className="contact-details__info-block">
      <img src={userpic} alt={name} />
      <div className="contact-details__info">
        <div className="contact-details__info-wrapper">
          <span className="contact-details__label align-right">Name:</span><span className="align-left">{name}</span>
          <span className="contact-details__label align-right">City:</span><span className="align-left">{ contact.city }</span>
          <span className="contact-details__label align-right">Email:</span><a className="align-left" href={'mailto:' + contact.email}>{contact.email}</a>
          <span className="contact-details__label align-right">Phone:</span><span className="align-left">{contact.phone}</span>
        </div>
      </div>
    </div>
  )
}

export default ContactData
