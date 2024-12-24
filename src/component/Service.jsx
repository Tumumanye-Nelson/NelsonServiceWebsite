
const services = [
  { title: "Web Development", description: "Custom websites built with modern technologies tailored to your business needs." },
  { title: "Mobile App Development", description: "User-friendly and high-performance mobile applications for Android and iOS." },
  { title: "UI/UX Design", description: "Creative and intuitive designs to enhance user experience and engagement." },
  { title: "Digital Marketing", description: "SEO, social media, and content strategies to boost your online presence." },
];

const Service = () => {
  return (
    <div className="service-page">
      <h1 className="hi2">Our Services</h1>
      <p>We offer a wide range of services to help your business grow and succeed:</p>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Service;
