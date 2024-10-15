import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {  GraduationCap,BookOpenCheck } from 'lucide-react';

function About() {
  return (
    <>
      <Navbar />
      <div className="Aboutimage">
        <div className="contactcontent">
          <h1>About</h1>
          <h3>Home About</h3>
          <div className="contactsearches">
            <select id="cars">
              <option value="Course1">Course1</option>
              <option value="Course2">Course2</option>
              <option value="Course3">Course3</option>
            </select>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      <div className="bottomimg">
        <img src="/img/overlay-bottom.png" alt="" />
      </div>
      </div>

      <div className="about">
        <div className="aboutimage">
          <img src="/img/about.jpg" alt="" />
        </div>
        <div className="aboutus">
          <h4>About US</h4>
          <h1 class="display-4">First Choice For Online Education Anywhere</h1>
          <p>
            Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
            dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
            diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor consetetur takimata eirmod, dolores takimata consetetur
            invidunt magna dolores aliquyam dolores dolore. Amet erat amet et
            magna
          </p>
          <div className="aboutboxes">
            <div className="availablesubject">
            <h1 class="h1" >123</h1>
            <h6 class="h6">Available<span>Subjects</span></h6>
            </div>
            <div className="onlinecourses">
            <h1 class="h1" >1234</h1>
            <h6 class="h6">ONLINE<span>COURSES</span></h6>
            </div>
            <div className="skilled">  
              <h1 class="h1" >123</h1>
            <h6 class="h6">SKILLED<span>INSTRUCTIONS</span></h6></div>
            <div className="students">  
              <h1 class="h1">1234</h1>
            <h6 class="h6">HAPPY<span>STUDENTS</span></h6></div>
          </div>
        </div>
      </div>
      <div className="about1">

        <div className="aboutus1">
          <h4>Why Choose Us?
          </h4>
          <h1 class="display-4">Why You Should Start Learning with Us?</h1>
          <p>
          Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet.
          </p>
        <div className="instructors">
          <div className="skilledinstructor">
         <span> <GraduationCap size={70}  color="#fff7ff" /></span>
<div>
  <h2>Skilled Instructors</h2>
  <p>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
</div>
          </div>
          <div className="internationalinstructor">
          <span> <GraduationCap size={70}  color="#fff7ff" /></span>
          <div>
  <h2>International Certificate
  </h2>
  <p>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
</div>
          </div>
          <div className="onlineclasses">

          <span> <BookOpenCheck size={70}  color="#fff7ff" /></span>
          <div>
  <h2>Online Classes</h2>
  <p>Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita magna kasd no nonumy et eos dolor magna ipsum.</p>
</div>
          </div>
        </div>
        </div>
        <div className="aboutimage1">
          <img src="/img/feature.jpg" alt="" />
        </div>
      </div>     
      <Footer/>
    </>
  );
}

export default About;
