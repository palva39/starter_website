import React from 'react';

function Services() {
  return (
    <section id="services" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row g-4">
          {["Web Design", "Marketing", "Branding"].map((title, i) => (
            <div className="col-md-4" key={i}>
              <div className="card shadow-sm">
                <img src={`https://picsum.photos/400/200?random=${i + 1}`} className="card-img-top" alt={title} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">This is a sample description for {title.toLowerCase()} services.</p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
