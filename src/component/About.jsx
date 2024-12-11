import ContactPage from "./Contact"
import Service from "./Service"
import Login from "./Login"
function About() {
    return (
      <div className="about">
<div>
  <h1 className="rrry">what we do best </h1>
  <p className="py">We deliver awesome designs and fully responsive static <br/>websites for your business capable of being optimized for better search engine visibility<br/> so that you can get highly ranked in all search engines. Our team also developes user friendly,<br/> jet fast, fully mobile optimized, responsive and SEO friendly websites</p>
<p></p>
</div>
<div>
<h1 className="hm">Search engine optimisation</h1>
<marquee  direction="" className="pl">We help you grow your sales and leads through optimisations to enable you reach your targeted audience
</marquee>
</div>
<section>
  
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
    )
  }
  export default About
  