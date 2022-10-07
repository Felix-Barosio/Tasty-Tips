import React from 'react'
import ContactData from './ContactData'

const Contact = () => {
    return (
        <div>
            <div className='contact-us'>
                <div className='contact-message'>
                    <div className='message'>
                        <h1>Contact Us</h1>
                        <p>Need to get in touch with us? Fill in the inquiry form below.</p>
                    </div>
                </div>
                <div className='contact-form'>
                    <ContactData />
                </div>
            </div>
        </div>
    )
}

export default Contact;
