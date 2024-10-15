import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
function Courses() {
  const [data , setData]   = useState([])
 useEffect(()=>{
  fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCuPH0NAvDhnNAiIY-7hwsgA&maxResults=25&key=AIzaSyBitBgo36MlXT9ep3CFmPo0W2UMSFWJD-4')
  .then((res)=> res.json())
  .then(data => setData(data.items))
  .catch(err => console.log(err))
 },[])
 data.forEach((val) => {
   console.log(val.snippet.thumbnails.default.url.url)
  // for (k in val.snippet) {
  //    console.log(k)
  // }
     
 })
  return (
    <>
      <Navbar />
      <div className="contactimage">
        <div className="contactcontent">
          <h1>Courses</h1>
          <h3>Home Courses</h3>
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

        {/* <div className='contactimagebottom'>

        <img src="/img/overlay-bottom.png" alt="" />
        </div> */}
      </div>
      <div className="sectioncourses">
        <h2>Our Courses</h2>
        <h1 className="h1">Checkout New Releases Of Our Courses</h1>
      </div>
      <div className="coursesdisplay">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Courses;
