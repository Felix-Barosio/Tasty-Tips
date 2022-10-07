import React, { useState } from 'react'

const ContactData = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleInputChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:5000/messages", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((item) => console.log(item))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='input-control'>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleInputChange} required />
                </div>
                <div className='input-control'>
                    <label>Email</label>
                    <input type="email" name='email' onChange={handleInputChange} required />
                </div>
                <div className='input-control'>
                    <label>Message</label>
                    <textarea cols="" rows="5" name='message' onChange={handleInputChange} required></textarea>
                </div>
                <div className='input-control'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default ContactData;
