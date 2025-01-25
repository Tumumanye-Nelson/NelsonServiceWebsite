import { lazy, Suspense } from "react";
import ScrollTopButton from "./ScrollTopButton";
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Service = lazy(() => import("./Service"));
const Login = lazy(() => import("./Login"));

function Home() {
  return (
    <div className="Home" id="home">
      {/* Main Section */}
      <div className="page144">
        <h1>Home page</h1>
        </div>     <section>
        <h1 className="amin">
          Welcome to Nelson Services<br />
          A place where new friendships<br />
          are created
        </h1>
        <p className="ppp">...</p>
        <button className="aaa">Login Please</button>
      </section>

      {/* Sections with Lazy Loading */}
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
