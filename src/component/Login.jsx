
function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
          required
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
          required
        />

        <label htmlFor="location">Please Describe Your Location</label>
        <textarea
          id="location"
          name="location"
          placeholder="Describe your location..."
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%", height: "100px" }}
          required
        ></textarea>

        <label htmlFor="issue">Please Describe The Issue</label>
        <textarea
          id="issue"
          name="issue"
          placeholder="Describe the issue..."
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%", height: "100px" }}
          required
        ></textarea>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
