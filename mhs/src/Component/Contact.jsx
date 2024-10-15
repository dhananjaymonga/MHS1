import React from 'react'
import { MapPin,Phone,Mail,ChevronsRight  } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function Courses() {
  return (
    <>
    <Navbar/>

    <div className='contactimage'>
        <div className='contactcontent'>

<h1>Contact</h1>
<h3>Home Contact</h3>
<div className="contactsearches" >
<select id="cars">
              <option value="Course1">Course1</option>
              <option value="Course2">Course2</option>
              <option value="Course3">Course3</option>
            </select>
            <input type="text" />
            <button>Search</button>
</div>
</div>
<div className='bottomimg'>
<img src="/img/overlay-bottom.png" alt="" />
</div>
      
        {/* <div className='contactimagebottom'>

        <img src="/img/overlay-bottom.png" alt="" />
        </div> */}

    </div>
    <div className='contact'>
        <div className='contactinformation'>
<div className='location'>
<span className='set'><MapPin size={33} color="#ffffff" />
</span>
<div className='loactionaddress'>
    <h3>Our Location</h3>
<h5>123 street jaipur,india</h5>
</div>
</div>
<div className='location'>
<span className='set phone'><Phone  size={33} color="#ffffff" />
</span>
<div className='loactionaddress'>
    <h3>Call Us</h3>
<h5>+917777777777</h5>
</div>
</div>
<div className='location'>
<span className='set mail'><Mail  size={33} color="#ffffff" />
</span>
<div className='loactionaddress'>
    <h3>Email Us</h3>
<h5>info@gmail.com</h5>
</div>
</div>
        </div>

      <div  className='NeedHelp'>
        <h3 >NEED HELP</h3>
        <div className='sendinformation'>
<h1>Send Us A Message</h1>
<div className='mainbox'>

    <form action="https://api.web3forms.com/submit" method='POST'>
    <input type="hidden"  name="access_key" value="dc529080-e018-4c62-845c-2648bbd69d3c"/>
<div className='nameemail'>
    <input type="text" name="" id=""  placeholder='YourName'/>
    <input type="text" name="" id="" placeholder='YourEmail' />
</div>
<div className='subject'>
    <input type="text" placeholder='subject' />
</div>
<div className='message'>
{/* <textarea id="w3review" name="w3review" rows="4" cols="50"> */}
<textarea name="" id=""  rows="6" cols="40"></textarea>
</div>
<button className='sendmessage '>Send Message</button>
    </form>
</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Courses
