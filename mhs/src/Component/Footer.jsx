import React from 'react'
import { Facebook ,Instagram ,Linkedin, X, ChevronRight } from 'lucide-react';

function Footer() {
  return (
      <div>
   <div className='footer'>
<img src="/img/overlay-top.png" alt="" />
<div className='information'>

<div className="info">
          <div className="book">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#FFFFFF"
              >
              <path d="M560-574v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-610q-38 0-73 9.5T560-574Zm0 220v-49q33-13.5 67.5-20.25T700-430q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-390q-38 0-73 9t-67 27Zm0-110v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-500q-38 0-73 9.5T560-464ZM248-300q53.57 0 104.28 12.5Q403-275 452-250v-427q-45-30-97.62-46.5Q301.76-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.82-25-37.82-8-76.18-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.54 0-71.77 9T106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.39-29.5 45.4-9.5 92.61-9.5 63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.87 0 91.93 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.89-22.5 42.45Q875-194 853-208q-34-14-69.23-22.5Q748.54-239 712-239q-63 0-121 21t-109 58ZM276-489Z" />
            </svg>
            <h3>Edukate</h3>
          </div>
          <div className='eductline'>
            <p>
              Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem
              at et diam est, tempor rebum ipsum sit ea tempor stet et
              consetetur dolores. Justo stet diam ipsum lorem vero clita diam
            </p>
          </div>
   </div>
   <div className='newsletter'>
<h3>Newsletter</h3>
<div className='serchfooter'>
<input type="text" placeholder='Your Email Address' />
<button>Singup</button>
</div>
   </div>
   </div>
   <div className='facility'>
    <div className='gets'>
    <div className="Getintouch">
            <h1>Get In Touch</h1>
            <div className="address">
              <span class="material-symbols-outlined">location_on</span>
              <span>123 Street, New York, USA</span>
            </div>
            <div className="contactss">
              <span class="material-symbols-outlined">call</span>{" "}
              <span>+012 345 67890</span>
            </div>
            <div className="mails ">
              <span class="material-symbols-outlined">mail</span>{" "}
              <span>info@example.com</span>
              
            </div>

            <div className='mediaicons'>
            <span> <Facebook size={30}/></span>
    <span><Instagram size={30} /></span>
    <span> <Linkedin size={30}/></span>
    <span><X  size={30}/></span>
            </div>
            </div>
    </div>
    <div className='ourcourse'>
    <div className=' ourcourses'>
        <h1>Our Course</h1>
        <div>
 <ChevronRight size={15} />
  <span className="coursedesign">Web Design</span>

</div>
<div>
  <ChevronRight  size={15} />
  <span className="coursedesign">App Design</span>

</div>
<div>
  <ChevronRight size={15}  />
  <span className="coursedesign" >Marketing</span>

</div>
<div>
  <ChevronRight size={15} />
  <span className="coursedesign">Research</span>
 
</div>
<div>
 <ChevronRight size={15} />
  <span className="coursedesign" >Seo</span>

</div>
        </div>
        </div>
   
    <div className='quicklink'>
    <div className=' ourcourses'>
        <h1>Our Course</h1>
        <div>
 <ChevronRight size={15} />
  <span className="coursedesign">Web Design</span>

</div>
<div>
  <ChevronRight  size={15} />
  <span className="coursedesign">App Design</span>

</div>
<div>
  <ChevronRight size={15}  />
  <span className="coursedesign" >Marketing</span>

</div>
<div>
  <ChevronRight size={15} />
  <span className="coursedesign">Research</span>
 
</div>
<div>
 <ChevronRight size={15} />
  <span className="coursedesign" >Seo</span>

</div>
        </div>
    </div>
   </div>
   <div className='copyrig'>
    <div className='copyright'>
      <div className='copy1'>
      <h4> <span>Copyright</span> © Your Site Name. All Rights Reserved.</h4>

      </div>
<div className='copy2'>
<h4><span>Designed by</span> HTML Codex</h4>

  </div>    </div>
   </div>
    </div>

                </div> 
    
  )
}

export default Footer
