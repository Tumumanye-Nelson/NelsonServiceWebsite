import { useNavigate } from "react-router-dom";
import About from "./About";
import ContactPage from "./Contact";
import Service from "./Service";
import Login from "./Login";
function Home() {
  const navigate = useNavigate();

  const linkTab = () => {
    navigate("/login"); // Assuming "/login" is the route for the Login component
  };

  return (
    <div className="Home">
      <div>
        <h1 className="amin">
          This is the website for Nelson<br /> services where new friends can<br /> be
          created
        </h1>
        <p className="ppp">
          Connect and Expand Your Circle: Our platform helps you meet new<br />
          people, make meaningful connections, and build friendships. Whether
          <br /> you are looking for casual chats, shared interests,<br /> or lifelong
          bonds, we provide a safe and welcoming space for you<br /> to explore and
          connect with others worldwide.
        </p>
        <nav>
          <button className="aaa" onClick={linkTab}>
            Login Please
          </button>
        </nav>
      </div>
      <img src="/images/home3.jpg" alt="" className="im" />
      <section>
      <div className="nn">
<About/>
      </div>
      </section>
      <section>
      <div className="nm">
<ContactPage/>
      </div>
      </section>
      <section>
      <div className="nmm">
<Service/>
      </div>
      </section>
      <section>
      <div className="nmmm">
<Login/>
      </div>
      </section>
    </div>
  );
}

export default Home;
