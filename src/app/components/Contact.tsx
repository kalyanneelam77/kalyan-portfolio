'use client'; // Ensure this file is treated as a client component in Next.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          setIsSent(true);
        },
        (error) => {
          console.error('Failed to send the message:', error);
          setError('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-4 bg-gradient-to-br from-blue-500 to-teal-300">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-white transition-all duration-300 hover:text-yellow-500 hover:scale-105">
        Get in Touch
      </h1>
      <div className="max-w-md mx-auto bg-white p-8 shadow-xl rounded-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group flex flex-col items-start">
            <label htmlFor="name" className="mb-2 text-sm text-gray-800 font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div className="form-group flex flex-col items-start">
            <label htmlFor="email" className="mb-2 text-sm text-gray-800 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div className="form-group flex flex-col items-start">
            <label htmlFor="message" className="mb-2 text-sm text-gray-800 font-semibold">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="submit-button bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
        {isSent && <p className="mt-4 text-green-500">Message sent successfully!</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default Contact;
