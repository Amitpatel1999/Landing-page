import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Home.css';

function Home() {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rve6gsn', 'template_y44840q', form.current, 'E3_BFkVN3pCD1wdO1')
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
      return false;
  };

  return (
    <div className='project '>
    <div className='container-fluid style'>
    <div className='row'>
    <div className='col-lg-12 '>
    <div className='col-lg-6'>
    <img src='/images/logo.webp' alt='' className='womekii' />
    </div>
    <div className='col-lg-6'>
    <div className='callwici'>
                   <img src='/images/call.png' alt='' className='calls' />
                   <h1 className='contacts'>+918506900024 </h1>
                 </div>
    </div>
    </div>
    </div>
    </div>
      <div className='text'>
        <p className='lrge'>Ever Dreamt of Owning a Piece of Noida's Real Estate? </p>
        <p className='text4'>
          Womeki Investors Club invites you to seize the opportunity across various property types! Whether it's a private office space, a residential haven, or a commercial gem, our exclusive collaborations offer tailored solutions. Invest from just 13.5 lakhs, earning a guaranteed annual rental income of 1.08 lakhs. It's not just an investment; it's your key to a thriving space and a reliable return. Ready to make your property dreams a reality? Join Womeki Investors Club today!
        </p>
      </div>
      <div className='container-fluid count'>
        <div className='row'>
          <div className='col colo'>
            <div className='col-lg-6 part1'>
              <div className='image'>
                <img src='/images/Home.webp' alt='' className='img' />
              </div>
            </div>

            <div className='col-lg-6 part3'>
              <h1 className='txt'>Get a quote.</h1>
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="to_name" placeholder='FullName' className='first' />
                <input type="email" name="from_name" placeholder='E-mail' className='mail' />
                <textarea name="message" placeholder='Phone number' className='number' />
                <textarea name="message" placeholder='Message / space required' className='type' />
                <div className="popup">
                  <button type="submit" className="btn">
                  REQUEST YOUR QUOTE
                  </button>
                  {isFormSubmitted && <p>Form submitted successfully!</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div ><h1 className='projects'>OUR PROJECT</h1>
        <div className='column-container'>
          <div className='card-container'>
            <img src='/images/Paras-Avenue.jpg' alt='' className='card-image' />
            <h1 className='card-title'>Paras Avenue</h1>
            <p className='crd-description'>
              Paras Avenue Plot No C3H1, Sector 129, Noida, Uttar Pradesh 201301
              <img src='/images/locatin.png' alt='' className='images' />
            </p>
            <p className='card-btn7'>Price On Request
              <img src='/images/money.png' alt='' className='images' /></p>
            <p className='Commercial'><img src='/images/icon-1.png' alt='' className='Commercial' />
              Commercial</p>
          </div>

          <div className='card-container'>
            <img src='/images/glam62.jpg' alt='' className='card-image' />
            <div className='diff'>
              <h1 className='card-title'>Glam62</h1>
              <p className='crd-description'>
                802 Pinnacle Tower, Block A, Industrial Area, Sector 62, Noida
                <img src='/images/locatin.png' alt='' className='images' />
              </p>
              <p className='card-btn7'>Price On Request
                <img src='/images/money.png' alt='' className='images' />
              </p>
            </div>
            <p className='Commercials'> <img src='/images/icon-1.png' alt='' className='Commercial' />Commercial</p>
          </div>

          <div className='card-container'>
            <img src='/images/clarkin.jpg' alt='' className='card-image' />
            <div className='diff'>
              <h1 className='card-title'>Clarkin</h1>
              <p className='crd-description'>
                ClarksInn Suites,Commercial Plot No.1 Sector-5, Vasundhara, Ghaziabad.
                <img src='/images/locatin.png' alt='' className='images' />
              </p>
              <p className='card-btn7'>Price On Request
                <img src='/images/money.png' alt='' className='images' />
              </p></div>
            <p className='Commercials'><img src='/images/icon-1.png' alt='' className='Commercial' />Commercial</p>
          </div>
        </div>

        <div className='column-container'>
          <div className='card-container'>
            <img src='/images/etherea.jpg' alt='' className='card-image' />
            <h1 className='card-title'>Etherea</h1>
            <p className='crd-description'>
              BHUTANI ALPHATHUM, TOWER-B, Sector 90, Noida, 201305
              <img src='/images/locatin.png' alt='' className='images' />
            </p>
            <p className='card-btn7'>Price On Request
              <img src='/images/money.png' alt='' className='images' /></p>
            <p className='Commercial'><img src='/images/icon-1.png' alt='' className='Commercial' />Commercial</p>
          </div>

          <div className='card-container'>
            <img src='/images/Sikkamall.webp' alt='' className='card-image' />
            <div className='diff'>
              <h1 className='card-title'>Sikkamall</h1>
              <p className='crd-description'>
                G9M5+G9P, Plot number-01/B, Noida-GraterNoida Expy
                <img src='/images/locatin.png' alt='' className='images' />
              </p>
              <p className='card-btn7'>Price On Request
                <img src='/images/money.png' alt='' className='images' /></p>
            </div>
            <p className='Commercials'><img src='/images/icon-1.png' alt='' className='Commercial' />Commercial</p>

          </div>


          <div className='card-container'>
            <img src='/images/Nexuria.jpeg' alt='' className='card-image' />
            <h1 className='card-title'>Nexuria</h1>
            <p className='crd-description'>
              22nd floor C-Tower Bhutani Alphathum sec 90 Noida
              <img src='/images/locatin.png' alt='' className='images' />
            </p>
            <p className='card-btn7'>Price On Request
              <img src='/images/money.png' alt='' className='images' /></p>
            <p className='Commercial'><img src='/images/icon-1.png' alt='' className='Commercial' />Commercial</p>
          </div>
        </div>
      </div>
      <div className='container-fluid footer'>
        <div className='row'>
          <div className='col '>
            <div className='col-lg-6'>
              <img src='/images/logo.webp' alt='' className='logoimg' />
            </div>

            <div className='col-lg-6'>
              <p className='yourmail'>Submit your email address</p>

              <input
                type='text'
                placeholder='Enter email address'
                className='emailaddress'
              />
              
              <button type='submit' className='submitt'>
                Submit
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;