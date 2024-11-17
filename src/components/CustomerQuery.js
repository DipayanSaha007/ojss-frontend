import React, { useState } from 'react';
import './styles/CustomerQuery.css';

function CustomerSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Query:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', query: '' });
  };

  return (
    <div className="customer-support-container">
      <h2>Customer Support</h2>

      {isSubmitted && (
        <div className="success-message">
          <p>Your query has been submitted successfully! Our team will get back to you shortly.</p>
        </div>
      )}

      <div className="support-sections">
        <div className="faq-section">
          <h3>Frequently Asked Questions (FAQ)</h3>
          <ul>
            <li><strong>How do I buy a jewellery?</strong> You can buy a jewellery from the "Buy Jewellery" option.</li>
            <li><strong>What do I do if my payment fails?</strong> Try re-entering your payment details or contact support for further assistance.</li>
            {/* Add more FAQ items as necessary */}
          </ul>
        </div>

        {/* <div className="live-chat-section">
          <h3>Live Chat Support</h3>
          <p>Click below to start a live chat with one of our support agents:</p>
          <button className="live-chat-button">Start Live Chat</button>
          {/* You can integrate an actual live chat service here 
        </div> */}

        <div className="contact-info-section">
            <h3>Contact Information</h3>
            <p>If you prefer direct communication, please reach us at:</p>
            <p>Email: <a href="mailto:swapnanjan.karmakar@gmail.com">support@team.com</a></p>
            <p>Phone: +91 9073506698</p>
        </div>


        <div className="ticket-system-section">
          <h3>Support Ticket System</h3>
          <p>Have a specific issue? Create a support ticket:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="query"
              placeholder="Describe your issue"
              value={formData.query}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit Ticket</button>
          </form>
        </div>

        {/* <div className="help-articles-section">
          <h3>Help Articles & Guides</h3>
          <ul>
            <li><a href="/help/how-to-book">How to Book a Movie Ticket</a></li>
            <li><a href="/help/payment-issues">Troubleshooting Payment Issues</a></li>
            <li><a href="/help/seat-selection">How to Select Seats</a></li>
            {/* Link to articles or knowledge base pages 
          </ul>
        </div> */}

        {/* <div className="refund-cancellation-section">
          <h3>Refund & Cancellation Policies</h3>
          <p>Our cinema has a strict refund and cancellation policy. Please refer to the following:</p>
          <p><strong>Refund Policy:</strong> Tickets can be refunded within 24 hours of booking.</p>
          <p><strong>Cancellation Policy:</strong> You can cancel your tickets anytime before the showtime for a full refund.</p>
        </div> */}

        {/* <div className="social-media-section">
          <h3>Follow Us on Social Media</h3>
          <p>Stay updated and reach out to us through our social media accounts:</p>
          <ul>
            <li><a href="https://www.facebook.com/yourcinema">Facebook</a></li>
            <li><a href="https://twitter.com/yourcinema">Twitter</a></li>
            <li><a href="https://www.instagram.com/yourcinema">Instagram</a></li>
          </ul>
        </div> */}

        <div className="feedback-section">
          <h3>User Feedback</h3>
          <p>We value your feedback! Please let us know how we can improve our customer support:</p>
          <form onSubmit={handleSubmit}>
            <textarea
              name="query"
              placeholder="Your Feedback"
              value={formData.query}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit Feedback</button>
          </form>
        </div>

        <div className="operating-hours-section">
          <h3>Operating Hours</h3>
          <p>Our customer support is available during the following hours:</p>
          <p><strong>Monday to Friday:</strong> 9:00 AM to 6:00 PM</p>
          <p><strong>Saturday and Sunday:</strong> 10:00 AM to 4:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerSupport;