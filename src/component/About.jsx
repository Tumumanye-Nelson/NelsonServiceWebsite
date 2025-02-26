function About() {
  return (
    <div id="about12" className="about12">
      <h1 className="oy">About Page</h1>

      {/* Grid Container */}
      <div className="about-grid">
        {/* Image Section */}
        <div className="image-section">
          <div className="image-gallery">
            <img src="src/photo/designer.jpg" alt="Designer" className="imgg" />
            <img src="src/photo/desin2.jpg" alt="Design 2" className="imgg" />
            <img src="src/photo/hello.jpg" alt="Hello" className="imgg" />
            <img src="src/photo/pex.jpg" alt="Pex" className="imgg" />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-section">

          <p className="py">
          <h2 className="section-title">What we do best</h2>
            We deliver awesome designs and fully responsive static websites for your business,
            capable of being optimized for better search engine visibility so that you can get
            highly ranked in all search engines. Our team also develops user-friendly, 
            jet-fast, fully mobile-optimized, responsive, and SEO-friendly websites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

