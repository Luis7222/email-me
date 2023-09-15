// src/components/EmailForm.js

import React, { useState } from 'react';
import axios from 'axios';

// src/components/EmailForm.js

// ... (other imports and code)

// src/components/EmailForm.js

// ... (other imports and code)

function EmailForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    subject: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);

    try {
      const response = await axios.post('/send-email', formData);
      console.log(response.data);
      // You can display a success message to the user here
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle and display an error message to the user if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-form">
      <h2>Email Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Subject:</label>
          <textarea
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            'Send Email'
          )}
        </button>
      </form>
    </div>
  );
}

export default EmailForm;
