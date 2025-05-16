import { useState, useEffect } from "react";

const ContactPage = () => {
  const initialValue = { name: "", email: "", message: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully:", formValue);
      setFormValue(initialValue); // Reset form
      setSubmit(false); // Reset submit state
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.name.trim()) {
      errors.name = "Name is required";
    } else if (values.name.trim().length < 4) {
      errors.name = "Name must be at least 4 characters";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    if (!values.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <div id="contact" className="contactc">
      <h1 className="h12">Contact Us Page</h1>
      <div className="p12">
        We would love to hear from you! Please reach out to us using the form below:
      </div>

      <pre>{JSON.stringify(formValue, null, 2)}</pre>

      {Object.keys(formErrors).length === 0 && isSubmit && (
        <div className="ui message success">Message sent successfully!</div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formValue.name}
            onChange={handleChange}
          />
        </label>
        <p>{formErrors.name}</p>

        <label>
          Email:
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
        </label>
        <p>{formErrors.email}</p>

        <label>
          Message:
          <textarea
            placeholder="Your Message"
            name="message"
            value={formValue.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <p>{formErrors.message}</p>

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
