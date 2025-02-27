
const ContactPage = () => {
  return (
    <div id="contact" className="contactc">
      <h1 className="h12">Contact Us page</h1>
      <div className="p12">We would love to hear from you! Please reach out to us using the form below:</div>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" />
        </label>
        <label>
          Message:
          <textarea placeholder="Your Message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>

      <div className="social-media">
        <h3>Follow Us:</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

  