import React, { useEffect } from 'react';
import gsap from 'gsap';
import './style.css'; // Ensure the path to your CSS file is correct
import logo from './assets/logo-removebg-preview.png'; // Adjust path as needed
import newLogo from './assets/new-removebg-preview.png'; // Adjust path as needed

const Landing = () => {
  useEffect(() => {
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/gsap.min.js"
    integrity="sha512-qF6akR/fsZAB4Co1QDDnUXWnaQseLGXoniuSuSlPQK6+aWhlMZcHzkasCSlnWoe+TJuudlka1/IQ01Dnhgq95g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js"
    integrity="sha512-IHDCHrefnBT3vOCsvdkMvJF/MCPz/nBauQLzJkupa4Gn4tYg5a6VGyzIrjo6QAUy3We5HFOZUlkUpP0dkgE60A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"

  }, []);

  return (
    <>
      <div id="nav">
        <img src={logo} alt="Logo" />
        <img src={newLogo} alt="New" />
      </div>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>

      <div id="main">
        <div id="page1">
          <h1>ROAM. RELISH. REPEAT.</h1>
          <h2>WELCOME TO OUR FOOD TRUCK!</h2>
          <p>
            From Italian to Chinese, our food trucks have it all. Check out our diverse menu that caters to every palate.
          </p>
          <button>View Menu</button>
        </div>
        <div id="page2">
          <div id="scroller">
            <div id="scroller-in">
              <h4>20</h4>
              <h4>%</h4>
              <h4>OFF</h4>
              <h4>ON</h4>
              <h4>WEEKENDS</h4>
            </div>
            <div id="scroller-in">
              <h4>20</h4>
              <h4>%</h4>
              <h4>OFF</h4>
              <h4>ON</h4>
              <h4>WEEKENDS</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
