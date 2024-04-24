import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card';
import Question1 from '../components/question1';
// import Form from '../components/form';
import './home.css';



const Form = ({ setIsOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Extract form data
    const formData = new FormData(e.target);
    const patientData = {
      name: formData.get('name'),
      age: +formData.get('age'),
      gender: formData.get('gender'),
      contact: formData.get('contact'),
      test: formData.get('test'),
      medical: formData.get('medical_record'),
      diagnosis: formData.get('diagnosis')
    };
  
    // Perform action with the form data
    // For example, you can send it to a server using fetch or axios
    fetch('http://localhost:8000/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patientData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      // Handle successful form submission
      // For example, close the form or show a success message
      setIsOpen(false); // Close the form
    })
    .catch(error => {
      // Handle errors
      console.error('Error submitting form:', error);
      // Optionally, display an error message to the user
    });
  };
  
  const handleCancelClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsOpen(false);
  };
  return (
    <div id="form" className='absolute inset-0 bg-red-400' style={{ backgroundColor: "white", width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute" }} onSubmit={handleSubmit}>
      <form action="" style={{ display: "block" }}>
        <label htmlFor="name" style={{ display: "block" }}>Patient Name </label>
        <input type="text" name="name" id="name" style={{ display: "block" }} required/>
        <label htmlFor="age" style={{ display: "block" }}>Age</label>
        <input type="text" name="age" id="age" style={{ display: "block" }} required/>
        <label htmlFor="gender" style={{ display: "block" }}>Gender</label>
        <input type="text" name="gender" id="gender" style={{ display: "block" }} required/>
        <label htmlFor="contact" style={{ display: "block" }}>Contact No.</label>
        <input type="text" name="contact" id="contact" style={{ display: "block" }} required/>
        <label htmlFor="test" style={{ display: "block" }}>Test</label>
        <input type="text" name="test" id="test" style={{ display: "block" }} required/>
        <label htmlFor="medical_record" style={{ display: "block" }}>Medical Record</label>
        <input type="text" name="medical_record" id="medical_record" style={{ display: "block" }} required/>
        <label htmlFor="diagnosis" style={{ display: "block" }}>Dignosis</label>
        <input type="text" name="diagnosis" id="diagnosis" style={{ display: "block" }} required/>
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
          <button style={{backgroundColor: "gray", color: "white" }}>
            Save
          </button>
          <button style={{ backgroundColor: "gray", color: "white" }} onClick={handleCancelClick}>Cancel</button>

        </div>
      </form>
    </div>
  )
}
const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  // const [count, setCount] = useState(0);
  const showForm = function () {

  }
  return (
    <div className="home-container">
      <Helmet>
        <title>Decimal Wonderful Mule</title>
        <meta property="og:title" content="Decimal Wonderful Mule" />
      </Helmet>
      <div className="home-header">

        {isOpen && <Form setIsOpen={setIsOpen}></Form>}


        <header
          data-thq="thq-navbar"
          className="navbarContainer home-navbar-interactive"
        >
          <span className="logo">EHOSPIRE</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links"></nav>
            <div className="home-buttons">
              <button className="home-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">EHOSPIRE</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav12 bodySmall">Home</span>
                <span className="home-nav22 bodySmall">Features</span>
                <span className="home-nav32 bodySmall">Services</span>
                <span className="home-nav42 bodySmall">Contact</span>
                <span className="home-nav52 bodySmall">Blog</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">Welcome to eHospire</h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Professional Data Management for Hospitals</span>

                </span>

              </span>

            </span>
            <div className="home-btn-group">
              <button className="buttonFilled" onClick={() => setIsOpen(!isOpen)}>Add patient</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Key Features of eHospire
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover the powerful features that eHospire offers for
                      efficient data management in hospitals
                    </span>

                  </span>
                  <span>


                  </span>
                </span>
                <span>
                  <span>

                    <span>

                    </span>
                  </span>
                  <span>
                    <span>

                    </span>
                    <span>

                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Data Management"
                subHeading="Efficiently manage and organize hospital data"
              ></FeatureCard>
              <FeatureCard
                heading="User Access Control"
                subHeading="Control access levels for different users within the hospital"
              ></FeatureCard>
              <FeatureCard
                heading="Customizable Dashboards"
                subHeading="Create personalized dashboards for quick data visualization"
              ></FeatureCard>
              <FeatureCard
                heading="Data Security"
                subHeading="Ensure the confidentiality and security of hospital data"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">
              Choose the Right Plan for Your Hospital
            </h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Select a plan that best fits your hospital&apos;s data
                  management needs.
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text36 heading3">Free</span>
                <span className="bodySmall">
                  Ideal for small hospitals looking to get started with data
                  management.
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text40">✔</span>
                  <span className="bodySmall">
                    Basic data entry functionality
                  </span>
                </div>
                <div className="home-container10">
                  <span className="home-text41">✔</span>
                  <span className="bodySmall">Limited storage capacity</span>
                </div>
                <div className="home-container11">
                  <span className="home-text42">✔</span>
                  <span className="bodySmall">Access to essential reports</span>
                </div>
                <div className="home-container12">
                  <span className="home-text43">✔</span>
                  <span className="bodySmall">Email support</span>
                </div>
              </div>
              <button className="home-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container13">
                <span className="home-text44 heading3">BASIC</span>
                <span className="bodySmall">
                  Perfect for hospitals seeking more advanced data management
                  tools.
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text45">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">49</span>
                <span className="home-text48">/ month</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text49">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home-container17">
                  <span className="home-text51">✔</span>
                  <span className="bodySmall">
                    Enhanced data entry capabilities
                  </span>
                </div>
                <div className="home-container18">
                  <span className="home-text52">✔</span>
                  <span className="bodySmall">Increased storage capacity</span>
                </div>
                <div className="home-container19">
                  <span className="home-text53">✔</span>
                  <span className="bodySmall">
                    Customizable reporting options
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text54">✔</span>
                  <span className="bodySmall">
                    Priority email and chat support
                  </span>
                </div>
              </div>
              <button className="home-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container21">
                <span className="home-text55 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Designed for large hospitals requiring comprehensive data
                  management solutions.
                </span>
              </div>
              <div className="home-container22">
                <span className="home-text58">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">99</span>
                <span className="home-text61">/ month</span>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <span className="home-text62">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home-container25">
                  <span className="home-text64">✔</span>
                  <span className="bodySmall">
                    Advanced data entry features
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-text65">✔</span>
                  <span className="bodySmall">Unlimited storage capacity</span>
                </div>
                <div className="home-container27">
                  <span className="home-text66">✔</span>
                  <span className="bodySmall">
                    Advanced analytics and reporting tools
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text67">✔</span>
                  <span className="bodySmall">24/7 priority support</span>
                </div>
              </div>
              <button className="home-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Efficient Data Management for Hospitals
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  eHospire provides a comprehensive solution for hospitals to
                  efficiently manage their data, streamline processes, and
                  improve patient care. With user-friendly interfaces and
                  advanced features, eHospire is the ideal choice for modern
                  healthcare facilities.
                </span>
                <span>

                </span>
              </span>
              <span>
                <span>

                </span>
                <span>

                </span>
              </span>
            </span>
            <span>
              <span>
                <span>

                </span>
                <span>

                </span>
              </span>
              <span>
                <span>

                </span>
                <span>

                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text85 heading2">Common questions</h2>
              <span className="home-text86 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container30">
              <Question1
                answer="eHospire uses advanced encryption and security measures to ensure the confidentiality and integrity of all data entered by hospitals."
                question="How secure is the data entered on eHospire?"
              ></Question1>
              <Question1
                answer="Yes, eHospire allows for multiple user accounts with different access levels to input and manage data efficiently."
                question="Can multiple users access and input data on eHospire?"
              ></Question1>
              <Question1
                answer="eHospire is fully compliant with healthcare regulations and standards to ensure the safe handling of sensitive hospital data."
                question="Is eHospire compliant with healthcare regulations?"
              ></Question1>
              <Question1
                answer="eHospire provides powerful tools and features for hospitals to analyze and interpret their data effectively, leading to informed decision-making."
                question="How does eHospire help in data analysis for hospitals?"
              ></Question1>
              <Question1
                answer="Yes, eHospire offers customization options to tailor the platform according to the unique requirements of each hospital, ensuring a personalized experience."
                question="Can eHospire be customized to suit specific hospital needs?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container31">
            <span className="logo">EHOSPIRE</span>
            <nav className="home-nav1">
              <span className="bodySmall">Home</span>
              <span className="home-nav221 bodySmall">Features</span>
              <span className="home-nav321 bodySmall">Services</span>
              <span className="home-nav421 bodySmall">Contact</span>
              <span className="home-nav521 bodySmall">Blog</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container32">
            <span className="bodySmall home-text89">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
