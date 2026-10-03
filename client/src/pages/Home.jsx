// Home.js
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './css/Home.css';
import { FaPaw } from 'react-icons/fa'; 
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Services } from './Services';

export const Home  = () => {

  const toggleAnswer = (event) => {
    const answer = event.target.nextElementSibling;
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
  };

const imagePaths = [
  '/images/law1.jpg', '/images/law2.jpg','/images/law3.jpg','/images/law4.jpg','/images/law5.jpg','/images/law6.jpg',
  '/images/law7.jpg','/images/law8.jpg', '/images/law9.jpg', '/images/law10.jpg','/images/law11.jpg','/images/law12.jpg',
  '/images/law13.jpg','/images/law14.jpg','/images/law15.jpg',
];

return (
<>
{/* Welcome SEction */}
<section className="welcome-section">
  <div className="welcome-content">
    <div className="welcome-left">
      <img src="/images/welcome.jpg" alt="Welcome Image" />
    </div>
    <div className="welcome-right">
      <h1>Welcome To RESCUETAILS</h1>
      <div className="quote-text">
        <p>
          Saving just one <span className="orange-text">animal</span> will not{' '}
          <span className="orange-text">change</span> the{' '}
          <span className="orange-text">world</span>, but the{' '}
          <span className="orange-text">world</span> will surely{' '}
          <span className="orange-text">change</span> for that one{' '}
          <span className="orange-text">animal</span>.
        </p>
      </div>
    </div>
  </div>
</section>


{/* Sub section */}

<section className="section1">
      <div className="subsection">
        <h2>Be A Rescuer</h2>
          <img src="/images/deonarkennel.jpg" alt="Be A Rescuer Image"/>
          <Link to="/R_register">
          <button type='submit' className="btn">Sign Up</button></Link>
      </div>

      <div className="subsection">
        <h2>Want to Report Animal</h2>
          <img src="/images/dog2.jpg" alt="Want to Report Animal Image"/>
          <Link to="/register">
          <button className="btn">Report Emergency</button></Link>  
      </div>
    </section>



<hr/>
{/* Awareness */}

<section className="awareness-section" id="awareness">
  <h2 className='awareheading'>WHY ANIMAL RESCUE MATTERS </h2>
  <div className="awareness-cards-container">
    {/* Card 1 */}
    <div className="awareness-card">
      <img src="/images/rescue.jpg" alt="Awareness Image 1" />
      <h3>Importance of Rescue</h3>
      <p>Learn about why rescuing stray animals is crucial for their well-being and creating a compassionate society.</p>
      <a href="https://sentientmedia.org/animal-rescue/">Explore</a>
    </div>

    {/* Card 2 */}
    <div className="awareness-card">
      <img src="/images/adoptme.jpg" alt="Awareness Image 2" />
      <h3>Adopt, Don't Shop</h3>
      <p>Discover the benefits of adopting animals from shelters and rescue organizations to provide them a loving home.</p>
      <a href="https://wvs.org.uk/news/10-reasons-why-you-should-adopt-dont-shop/">Explore</a>
    </div>

    {/* Card 3 */}
    <div className="awareness-card">
      <img src="/images/cat.jpg" alt="Awareness Image 3" />
      <h3>Volunteer Opportunities</h3>
      <p>Find out how you can contribute your time and skills to volunteer for the welfare of stray animals in need.</p>
      <a href="https://strayanimalfoundationindia.org/why-volunteering-is-essential-in-helping-stray-animals/" >Explore</a>
    </div>
  </div>
</section>
<hr/>


{/* Aboutus */}
<section className="about-container" id="aboutus">
    <div className="about-content">
        <div className="about-image-container">
        <img src="/images/orange-paw-vector.png" alt="Stray Animal Rescue System" className="about-image"/>
        </div>
        <div className="about-text-container">
            <h2>ABOUT US</h2>
            <p>
                Welcome to the RESCUETAILS! Our mission is to provide
                a platform for rescuing and caring for stray animals. We believe in
                creating a community that works together to ensure the well-being of
                animals in need.
            </p>
            <h3>Our Mission</h3>
            <p>
                Our proposal commits to a perspective, where animal lives matter. Protection,
                care, empathy would equally distribute by the shelter system without any profits.
                On this report, design and analysis have been applied to demo version of adoption
                and fostering system.
            </p>
            <h3>How We Help</h3>
            <ul>
                <li>Rescue and rehabilitation of stray animals</li>
                <li>Providing medical care and vaccinations</li>
                <li>Community awareness and education programs</li>
            </ul>
        </div>
    </div>
</section>
<hr/>
{/* Service */}
<section id="service_home">
  <Services/>
</section>
<hr/>
{/* Laws */}
<section className="gallery-section">
      <h2 className='law-heading'>ANIMAL LAWS BY INDIAN GOVERNMENT THAT EVERY CITIZEN MUST KNOW</h2><br/>
      <div className="gallery-container">
        {imagePaths.map((path, index) => (
          <div key={index} className="gallery-item">
            <img src={path} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
    <hr></hr>
{/* FAQ section */}
<section>
      <div className="faq-section">
        <h2>FAQ's</h2>
        <div className="faq-container">
          <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
              <FaPaw className="paw-icon" />
              <h3>What is the main goal of your stray animal rescue organization?</h3>
            </div>
            <div className="answer">
              <p>Our primary goal is to rescue, rehabilitate, and provide shelter for stray animals, offering them a chance for a better life.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
              <FaPaw className="paw-icon" />
              <h3> How can I report a stray animal in distress or in need of rescue?</h3>
            </div>
            <div className="answer">
              <p>If you encounter a stray animal requiring assistance, please contact our emergency hotline or use our online reporting system to provide details for prompt response.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
              <FaPaw className="paw-icon" />
              <h3>Can I volunteer to help with the rescue and care of stray animals?</h3>
            </div>
            <div className="answer">
              <p> Yes, we welcome volunteers. If you're passionate about animal welfare, you can join our volunteer program and contribute to the well-being of stray animals.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
              <FaPaw className="paw-icon" />
              <h3>What should I do if I find an abandoned litter of puppies or kittens?</h3>
            </div>
            <div className="answer">
              <p>Contact our rescue team immediately. We have the resources and expertise to provide care for abandoned litters and ensure they receive the necessary medical attention.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
              <FaPaw className="paw-icon" />
              <h3>Should I attempt to provide food or water to a stray animal on the road?</h3>
            </div>
            <div className="answer">
              <p>While it's a compassionate thought, avoid feeding an unknown animal, as it might have dietary restrictions or health issues. Water can generally be safe, but it's best to let professionals handle the animal's care.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
              <FaPaw className="paw-icon" />
              <h3>How can I comfort a stray animal without putting myself for the animal at risk?</h3>
            </div>
            <div className="answer">
              <p>Maintain a calm demeanor, avoid direct eye contact, and speak softly. If the animal approaches willingly, you can offer your hand for them to sniff. However, be cautious and let professionals handle the actual rescue.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
              <FaPaw className="paw-icon" />
              <h3> What measures do you take to ensure the safety of animals in your care?</h3>
            </div>
            <div className="answer">
              <p> The safety of animals is our top priority. We follow strict protocols for sheltering, transportation, and medical care. Our facilities are designed to provide a secure and comfortable environment.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
              <FaPaw className="paw-icon" />
              <h3>What safety precautions should I take when approaching a stray animal on the road?</h3>
            </div>
            <div className="answer">
              <p>Always prioritize safety. Move slowly and speak gently. Avoid sudden movements, and never corner the animal. If the animal seems scared or aggressive, it's best to keep a safe distance and call for professional help.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* Footer */}
<footer className="footer">
      <div className="footer-options">
        <div className="footer-column">
          <h4>RESCUETAILS</h4>
          <p className='sub-p'>Transforming lives, one paw at a time </p>
          <ul>
            <li><a href="#aboutus">Our Mission</a></li>
            <li><a href="#aboutus">Testimonials</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#service_home">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
      </div> 
    <div className="footer-column">
      <h4>Services</h4>
      <ul>
        <li><a href="#service-id">Adoption</a></li>
        <li><a href="#service-id">Donation</a></li>
        <li><a href="#service-id">Veterinary Care</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Subscribe to get important updates</h3>
        <form action="#">
        <input type="email" placeholder="Enter your E-mail"/>
        <button className='button' type="submit" value="subscribe" >Subscribe</button>
      </form>
    </div>   
  <div className="footer-column">
      <h4>Contact Us</h4>
      <ul>
        <li><a href="#">Phone: 123-456-7890</a></li>
        <li><a href="#">Email: info@rescuetails.com</a></li>
        <li><a href="#">Visit Us</a></li>
      </ul>
      <div className="footer-social--icons">
          <FaInstagram className="icons"/>
          <a href="https://www.youtube.com/watch?v=AURgRK56Cl0&ab_channel=TheHumaneSocietyoftheUnitedStates" target="_blank">
            <FaYoutube className="icons" />
          </a>
      </div>
    </div>
  </div>
</footer>
  </>
);
};
export default Home;
