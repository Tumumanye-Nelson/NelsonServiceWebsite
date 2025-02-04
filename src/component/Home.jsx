import { lazy, Suspense } from "react";
import ScrollTopButton from "./ScrollTopButton";
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Service = lazy(() => import("./Service"));
const Login = lazy(() => import("./Login"));
import video from '../assets/y2mate.com - Website Presentation Mockup Video  After Effects Template_360p.mp4'

function Home() {
  return (
    <div className="homey" id="home">
<div className="welcome ">
  <h1 className="wel">welcome</h1>
  <p className="we">This is my page</p>
</div>
<video  src={video} autoPlay loop muted></video>
 
   
      
      
       
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
        <section id="login">
          <Login />
        </section>
      </Suspense>
      <ScrollTopButton/>
    </div>
  );
}

export default Home;
