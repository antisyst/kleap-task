import { CiMenuBurger } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import Logo from '../../assets/logo';
import './navbar.scss';
import { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import  { useEffect } from 'react';
import { Fade } from "react-awesome-reveal";



export default function Navbar() {

    useEffect(() => {
        const dropContent = document.getElementById('drop-content');
        if (dropContent) {
            dropContent.addEventListener("mouseover", DropFunction);
            dropContent.addEventListener("mouseout", ResetFunction);
        }
    
        function DropFunction() {
            const dropText = document.getElementById('drop-text');
            if (dropText) {
                dropText.style.color = "var(--var-color-main)";
            }
        }
    
        function ResetFunction() {
            const dropText = document.getElementById('drop-text');
            if (dropText) {
                dropText.style.color = ""; 
            }
        }
    });
    
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    let navbarClasses = ["navbar"];
    if (scrolled) {
      navbarClasses.push("scrolled");
    }
    
    


    return(
        <nav className={navbarClasses.join(" ")}>
        <div className="wrapper">
        <Fade delay={3900} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
          <div className="logo"><a href="#"><Logo/></a></div>
          </Fade>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
          <div className='advanced for-desk'>
            <a href="">Log in</a>
            <a href="">Sign up</a>
          </div>
            <label htmlFor="close-btn" className="btn close-btn"><TfiClose/></label>
            <Fade delay={4000} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
            <li>
              <a href="#" className="desktop-item drop-euthrM4" id='drop-text'>Products<MdKeyboardArrowUp className='drop-svg'/></a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">Products</label>
              <ul className="drop-menu" id='drop-content'>
                <li><a href="#">AI Website Generator</a></li>
                <li><a href="#">QR Code Generator</a></li>
              </ul>
            </li>
            </Fade>
            <Fade delay={4100} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
            <li>
              <a href="#" className="desktop-item drop-euthrM4" id='drop-text'>Learn <MdKeyboardArrowUp className='drop-svg'/></a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">Learn</label>
              <ul className="drop-menu" id='drop-content'>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Knowledge base</a></li>
                <li><a href="#">Community Facebook group</a></li>
                <li><a href="#">Financial</a></li>
              </ul>
            </li>
            </Fade>
            <Fade delay={4200} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
            <li>
              <a href="#" className="desktop-item drop-euthrM4" id='drop-text'>Company <MdKeyboardArrowUp className='drop-svg'/></a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">Company</label>
              <ul className="drop-menu" id='drop-content'>
                <li><a href="#">The Story</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Ambassador Program</a></li>
                <li><a href="#">Kleap for Charities</a></li>
              </ul>
            </li>
            </Fade>
            <Fade delay={4300} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
            <li>
              <a href="#" className="desktop-item drop-euthrM4" id='drop-text'>Language <MdKeyboardArrowUp className='drop-svg'/></a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item" >Language</label>
              <ul className="drop-menu" id='drop-content'>
                <li><a href="#">The Story</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Ambassador Program</a></li>
                <li><a href="#">Kleap for Charities</a></li>
              </ul>
            </li>
            </Fade>
            <Fade delay={4400} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
            <li><a href="#">Pricing</a></li>
            </Fade>
          </ul>
          <Fade delay={4500} triggerOnce={true} direction={"down"} cascade damping={1e-1}>
          <div className='advanced for-mobile'>
            <a href="">Sign in</a>
            <a href="">Start Now</a>
          </div>
          </Fade>
          <label htmlFor="menu-btn" className="btn menu-btn"><CiMenuBurger/></label>
        </div>
      </nav>

    )
}
