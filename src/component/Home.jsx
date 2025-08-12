import { lazy, Suspense } from "react";
import ScrollTopButton from "./ScrollTopButton";
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Service = lazy(() => import("./Service"));
import video from '../assets/y2mate.com - Website Presentation Mockup Video  After Effects Template_360p.mp4'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="homey" id="home">
      <div className="welcome ">
        <h1 className="wel">welcome </h1>
        <div className="we">
         <pre>This is website design site for you,
         visit it to acquire <br></br>for your website development
          </pre> 
          <div className="button2">
          <button onClick={() => navigate("/Login")} className="log">
            Login
          </button>
          </div>
        </div>
      </div>
      <video src={video} autoPlay loop muted></video>

      <Suspense fallback={<div>Loading...</div>}>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="service">
          <Service />
        </section>
      </Suspense>
      <ScrollTopButton />
    </div>
  );
}

export default Home;
