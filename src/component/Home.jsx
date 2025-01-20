import About from "./About";
import Contact from "./Contact"
import Service from "./Service"
import Login from "./Login"
function Home() {
 
 

  return (
    <div className="Home" id="home">
      <div>
        <h1 className="amin">
          Welcome to Nelson Services<br />
          A place where new friendships<br />
          are created
        </h1>
        <p className="ppp">
          Connect and expand your circle! Our platform helps you meet new
          people, make meaningful connections, and build friendships. Whether
          you are looking for casual chats, shared interests, or lifelong
          bonds, we provide a safe and welcoming space for you<br />
          to explore and connect with others worldwide.
        </p>
        <nav>
          <button className="aaa">
            Login Please
          </button>
        </nav>
      </div>
      <img
        src="/images/home3.jpg"
        alt="A welcoming space for making new friends"
        className="im"
      />
      
      <div id="about">
        <About/>
      </div>
      <div id="contact">
       <Contact/>
      </div>
      <div id="service">
         <Service/>
      </div>
      <div id="login">
        <Login/>
      </div>
    </div>
  );
}

export default Home;
