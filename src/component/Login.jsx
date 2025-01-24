function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch("http://localhost:5173/Service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
        } else {
          alert("Failed to submit the form.");
        }
      })
      .catch((error) => alert("An error occurred: " + error));
  };

  return (
    <div id="login" >
      <h2 style={{ textAlign: "center" }}>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name..."
          style={inputStyle}
          required
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name..."
          className="inputStyle"
          required
        />

        <label htmlFor="location">Please Describe Your Location</label>
        <textarea
          id="location"
          name="location"
          placeholder="Describe your location..."
          className="textareaStyle"
          required
        ></textarea>

        <label htmlFor="issue">Please Describe The Issue</label>
        <textarea
          id="issue"
          name="issue"
          placeholder="Describe the issue..."
          className="textareaStyle"
          required
        ></textarea>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button type="submit" className="buttonStyle">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  margin: "10px 0",
  padding: "8px",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

export default Login;
