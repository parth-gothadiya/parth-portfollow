




import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ fullname: "", email: "", message: "" });
  const [messages, setMessages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let updatedMessages;

    try {
      await axios.post("https://parth-email-service.onrender.com/api/send-email", {
        fullName: formData.fullname,
        email: formData.email,
        message: formData.message,
      });

      if (editingIndex !== null) {
        updatedMessages = messages.map((msg, index) => (index === editingIndex ? formData : msg));
        setEditingIndex(null);
      } else {
        updatedMessages = [...messages, formData];
      }

      setMessages(updatedMessages);
      localStorage.setItem("messages", JSON.stringify(updatedMessages));
      setFormData({ fullname: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setLoading(false);
  };

  const handleEdit = (index) => {
    setFormData(messages[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="form-btn" type="submit" disabled={loading}>
          <span>{loading ? "Sending..." : editingIndex !== null ? "Update Message" : "Send Message"}</span>
        </button>
      </form>

      {/* <div>
        <h3>Saved Messages</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <p><strong>{msg.fullname}</strong> ({msg.email}): {msg.message}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

const Contact = () => {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.068060986775!2d72.91268715733808!3d21.308326826486415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be047cef21d3429%3A0x34b772224b1202d3!2sVelanja%2C%20Gujarat%20394150!5e0!3m2!1sen!2sin!4v1754640543887!5m2!1sen!2sin "
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <ContactForm />
      </section>
    </article>
  );
};

export default Contact;

