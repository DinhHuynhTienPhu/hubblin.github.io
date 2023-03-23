import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/avt.jpg";
import p2 from "../images/p2.jpg";

import {
  IoPerson,
  IoLocationSharp,
  IoMailSharp,
  IoCalendarClearOutline,
} from "react-icons/io5";

import ImageCarousel from "./ImageCarousel";
const images = [
  img,p2
  
];
const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <div style={{
        }}>
                <ImageCarousel images={images} />

        </div>
        <div className="about-info">
          <b className="info-title">"Every challenge is an opportunity"</b>
          <div className="info" style={{textOverflow:"unset !important", whiteSpace:"break-spaces !important"}}>
            <br />
            <b style={{fontSize:'200%'}}>A</b>s an experienced game developer, I believe that every challenge is an
            <br/>
            opportunity to
            learn and improve. 
            <br />
            <b style={{ fontSize: '200%' }}>I</b>'m always eager to try new things in different fields and take on new <br/> challenges.

            <br />
            <b style={{ fontSize: '200%' }}>I</b>'m a responsible developer who is always take my task seriously and <br/>always
            try to do my best. 
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPerson className="icon" style={{position:'relative',top:'2px'}} />  Dinh Huynh Tien Phu
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoLocationSharp className="icon" style={{ position: 'relative', top: '3px' }} />  56 Rach Long Den Street, 8 District, HCM City
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoMailSharp className="icon" style={{ position: 'relative', top: '3px' }} />  ff10111011@gmail.com
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoCalendarClearOutline className="icon" style={{ position: 'relative', top: '3px' }} />  2001
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;
