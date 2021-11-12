import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './Filters';
import Table from './Table';
import ContactData from './ContactData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Contacts() {
  /* Fetching all contacts data from api */
  const url = 'https://contactify-api.herokuapp.com/api/contacts';
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setContacts(response.data);
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

  return (
    <>
      <div className="main-content__top-block">        
        <h1>Contactify</h1>
        <Filters contacts={contacts} />
      </div>
      <div className="main-content__contacts-list">        
        <Table contacts={contacts} />    
        <div className="contact-details">
          <div className="contact-details__top-block"></div>
          <Router>
            <Routes>
              <Route path={'/'} element={<ContactData id={'5da45211e8f6549a53095f00'} />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default Contacts
