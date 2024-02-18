import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Ensure the path to your CSS file is correct
import logo from '../assets/logo-removebg-preview.png'
import name from '../assets/new-removebg-preview.png'
// import logo from './assets/logo-removebg-preview.png'; // Adjust path as needed
// import newLogo from './assets/new-removebg-preview.png'; // Adjust path as needed

const Landing = () => {
  let navigate = useNavigate();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#page1 h1", {
      duration: 1,
      opacity: 0,
      x: -100,
      ease: "power2.out",
    });

    gsap.from("#page1 h2", {
      duration: 1,
      opacity: 0,
      x: -200,
      ease: "power2.out",
      delay: 0.5,
    });

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onToggle: self => console.log("ScrollTrigger toggled", self.isActive),
      onEnter: () => console.log("ScrollTrigger entered"),
      onLeave: () => console.log("ScrollTrigger left"),
      onEnterBack: () => console.log("ScrollTrigger entered back"),
      onLeaveBack: () => console.log("ScrollTrigger left back"),
    });
  }, []);

  const navigateToMenu = () => {
    navigate('/');
  };

  return (
    <>
      <div id="nav" >
        <img src={logo} alt="Logo" />
        <img src={name} alt="Name" />
      </div>
      <div id="cursor"></div>
      <div id="cursor-blur" style={{zIndex: -1}}></div>

      <div id="main">
        <div id="page1">
          <h1 style={{scale: 2, color: "red"}}>ROAM. RELISH. REPEAT.</h1>
          <h2>WELCOME TO OUR FOOD TRUCK!</h2>
          <p>
            From Italian to Chinese, our food trucks have it all. Check out our diverse menu that caters to every palate.
          </p>
          <button onClick={navigateToMenu}>View Menu</button>
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
