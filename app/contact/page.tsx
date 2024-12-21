"use client";

import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs.sendForm('service_8k911lh', 'template_2ppq2rl', form, '4XWwEJ6KI5Rmy3bq7')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
      });

    form.reset();
  };

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <div className="contact-container">
      <h1 className="title-contact">Contact</h1>
      <form onSubmit={sendEmail} className="form">
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="textarea"
            placeholder="Your message"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
  
}

export default Contact;