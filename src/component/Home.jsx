import { useNavigate } from "react-router-dom";

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
          Connect and Expand Your Circle: Our platform helps you meet new
          people, make meaningful connections, and build friendships. Whether
         you are looking for casual chats, shared interests, or lifelong
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
    

    </div>
  );
}

export default Home;
