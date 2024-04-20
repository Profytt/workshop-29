import React from "react";
import { useState } from "react";
import '../index.css'

export default function NewPlayer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [breed, setBreed] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e, setFunction) => {
        setFunction(e.target.value);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const newPlayerData = { name, email, breed, message };
        await addNewPlayer(newPlayerData);
        refetchedPlayers();
        setMessage('Player added!')
      } catch (error) {
        setMessage('Error adding player');
      }
    }

    


  return (
    <>
      <h1>Sign Up Form</h1>

      <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input placeholder="Name" value={name} onChange={(e) => handleChange(e, setName)} type="text" />

        <label>Email</label>
        <input placeholder="email" value={email} onChange={(e) => handleChange(e, setEmail)} type="text" />

        <label>Breed</label>
        <input placeholder="breed" value={breed} onChange={(e) => handleChange(e, setBreed)} type="text" />

        <label>Message</label>
        <textarea placeholder="talents?" value={message} onChange={(e) => handleChange(e, setMessage)}></textarea>

        <button type="submit">Submit Doggo</button>
      </form>
      </div>
      
    </>
  );
}
