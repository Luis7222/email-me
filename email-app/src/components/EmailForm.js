import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    subject: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/send-email', formData); // Make a POST request to your backend
        console.log(response.data); // Log the response from the server
        // You can display a success message to the user here
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle and display an error message to the user if needed
      }
  };

  return (
    <div>
      <h2>Email Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subject:</label>
          <textarea
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default EmailForm;
