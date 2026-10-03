
import React from 'react';
import './css/Services.css';

export const Services = () => {
  

  return (
        <>
        <section id="service-id">
        <h2 className='service-heading'>
            Services
          </h2>
        </section>
        <section className="heading-service">
        
        <div className="card">
          <img src="/images/dog-treatment.jpg" alt="Service 1"/>
          <div className="info">
            <h3>Emergency Care</h3>
            <p>We provide 24/7 emergency care for animals in need.</p>
          </div>
        </div>
        
        <div className="card">
              <img src="/images/cat-incentre.jpg" alt="Service 2"/>
              <div className="info">
              <h3>Best Treatment</h3>
              <p>Our experienced veterinarians offer the best treatment options for animals.</p>
        </div>
        </div>
        
        <div className="card">
              <img src="images/humanwith-animal.jpg" alt="Service 3"/>
              <div className="info">
              <h3>Great Facilities</h3>
              <p>Our facilities boast top-notch amenities for the utmost comfort of animals.</p>
            </div>
          </div>
        
          <div className="card">
              <img src="/images/dog-invet.jpg" alt="Service 4"/>
              <div className="info">
              <h3>Safety First</h3>
              <p>We prioritize the safety and well-being of all animals under our care.</p>
            </div>
            </div>
        
            <div className="card">
              <img src="/images/dog2.jpg" alt="Service 5"/>
              <div className="info">
              <h3>Volunteer Opportunities</h3>
              <p>Join our compassionate community and make a difference in the lives of animals through volunteering.</p>
            </div>
            </div>
        
            <div className="card">
              <img src="/images/injured-dog2.jpg" alt="Service 6"/>
              <div className="info">
              <h3>Emergency Rescue Services</h3>
              <p>Report animals in distress and help us save lives with prompt and coordinated rescue efforts.</p>
            </div>
            </div>
        </section>
        </>
    
  );
};
