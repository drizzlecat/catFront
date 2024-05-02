import React, { useState } from 'react';

function InputForm() {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action
    const url = 'http://localhost:3005/profiles'; // Adjust the URL based on your Rails server configuration
    const bodyData = {
      profile: {
        name: name,
        job_title: jobTitle
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Success:', jsonResponse);
      } else {
        throw new Error('Failed to submit profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Styling configurations
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  const labelStyle = {
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
    fontWeight: '500'
  };

  const inputStyle = {
    height: '40px',
    marginBottom: '15px',
    padding: '5px 10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  return (
    <form style={formStyle}>
      <label style={labelStyle} htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        style={inputStyle}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Jane Smith"
      />
      <label style={labelStyle} htmlFor="jobTitle">Job Title</label>
      <input
        type="text"
        id="jobTitle"
        style={inputStyle}
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Head of Tomfoolery"
      />
      <button onClick={handleSubmit}>save</button>
    </form>
  );
}

export default InputForm;
