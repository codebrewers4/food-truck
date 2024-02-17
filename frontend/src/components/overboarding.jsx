import React from 'react'
import  './overboarding.module.css';
import { render } from '@testing-library/react';
// import './script.js'
class Onboarding extends React.Component{
  render(){
    return (
    <div>
    <div id="nav">
      <img
        src="C:\Users\PARNA MISHRA\OneDrive\Documents\Desktop\FOOD\foodmine\foodmine-react-js\frontend\public\icons\logo-removebg-preview.png"
        alt=""
      />
     
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
            <h4>TOPTRACER RANGE</h4>
            <h4>GOLF LESSONS</h4>
            <h4>ADVENTURE GOLF</h4>
            <h4>COFFEE SHOP</h4>
            <h4>LEAGUES</h4>
          </div>
          <div id="scroller-in">
            <h4>TOPTRACER RANGE</h4>
            <h4>GOLF LESSONS</h4>
            <h4>ADVENTURE GOLF</h4>
            <h4>COFFEE SHOP</h4>
            <h4>LEAGUES</h4>
          </div>
        </div>
        <div id="about-us">
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt=""
          />
          <div id="about-us-in">
            <h3>ABOUT US</h3>
            <p>
              Home to a 46-bay, multi-tier, floodlit driving range, powered by
              Toptracer Range technology. Complimented by a practice green and
              bunker, coffee shop and American Golf Store. There truly is
              something for everyone as we also boast two outdoor 18-hole
              dinosaur themed crazy golf courses.
            </p>
          </div>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt=""
          />
        </div>
        <div id="cards-container">
          <div class="card" id="card1">
            <div class="overlay">
              <h4>TopRacer Range</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                quam molestias magni cupiditate architecto et enim quas facere
                ipsum tempora?
              </p>
            </div>
          </div>
          <div class="card" id="card2">
            <div class="overlay">
              <h4>Adventure Golf</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                quam molestias magni cupiditate architecto et enim quas facere
                ipsum tempora?
              </p>
            </div>
          </div>
          <div class="card" id="card3">
            <div class="overlay">
              <h4>Golf Lessons</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                quam molestias magni cupiditate architecto et enim quas facere
                ipsum tempora?
              </p>
            </div>
          </div>
        </div>
        <div id="green-div">
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
            alt=""
          />
          <h4>
            SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS STRAIGHT TO YOUR INBOX
          </h4>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
            alt=""
          />
        </div>
      </div>
      <div id="page3">
        <p>
          Excellent couple of hours, relax and enjoy in the fun. Staff were
          accommodating, friendly and very helpful. Café on site for
          refreshments etc. Will keep children enterntained during the holidays.
          Worth a visit if you haven’t been.
        </p>
        <img
          id="colon1"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
          alt=""
        />
        <img
          id="colon2"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
          alt=""
        />
      </div>
      <div id="page4">
        <h1>WHAT ARE YOU WAITING FOR?</h1>
        <div class="elem">
          <h2>TOPTRACER RANGE</h2>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt=""
          />
        </div>
        <div class="elem">
          <h2>TOPTRACER RANGE</h2>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt=""
          />
        </div>
        <div class="elem">
          <h2>TOPTRACER RANGE</h2>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt=""
          />
        </div>
      </div>
      <div id="footer">
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
          alt=""
        />
        <div id="f1">
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
            alt=""
          />
        </div>
        <div id="f2">
          <h3>TOPTRACER Ranges</h3>
          <h3>Golf Lessons</h3>
          <h3>Adventure Golf</h3>
        </div>
        <div id="f3">
          <h3>coffee shop</h3>
          <h3>LEAGUES</h3>
          <h3>Contact us</h3>
        </div>
        <div id="f4">
          <h4>
            A20, SIDCUP BYPASS <br />
            CHISLEHURST <br />
            KENT <br />
            BR7 6RP <br />
            TEL: 0208 309 0181 <br />
            GET DIRECTIONS <br />
          </h4>
        </div>
      </div>
    </div>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/gsap.min.js"
      integrity="sha512-qF6akR/fsZAB4Co1QDDnUXWnaQseLGXoniuSuSlPQK6+aWhlMZcHzkasCSlnWoe+TJuudlka1/IQ01Dnhgq95g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js"
      integrity="sha512-IHDCHrefnBT3vOCsvdkMvJF/MCPz/nBauQLzJkupa4Gn4tYg5a6VGyzIrjo6QAUy3We5HFOZUlkUpP0dkgE60A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="script.js"></script>
    </div>
    )
    }
}

export default Onboarding;
