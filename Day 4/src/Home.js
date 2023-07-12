import { Link } from "react-router-dom"
import './Home.css'
import React from 'react'
// const OpenSidebar = () => {
//   document.getElementById("sidePanel").style.width = "250px";
// }

// function CloseSideBar() {
//   document.getElementById("sidePanel").style.width = "0px";
// }

export default function Home() 
{
  return (
    <>
         {/* <div className='sidebar'></div>
    <div id = "sidePanel" className = "side-panel">
    <a href="javascript:void(0)" class="close-side-bar" onClick={CloseSideBar}><i class="fa fa-remove" style={{fontSize:36}}></i></a>
    <a>Create Events</a>		
    <a>Select Events</a>		
    <a>Modify Events</a>		
    <a>Delete Events</a>			
    <a>Add to Calender</a>			
    </div> */}
  
        <nav class="nav0">
          <ul>
            <p className="idoHome">iDoEventZ</p>
            <li className='nav1'><Link to="/">Log Out</Link></li>
            <li className='nav1'><Link to="/Profile">Profile</Link></li>
            <li className='nav1'><Link to="/Events">Events Invitation</Link></li>
            <li className='nav1'><Link to="/About">About</Link></li>
            <li className='nav1'><Link to="/Home">Home</Link></li>
          </ul>
        </nav>
          {/* <form class="example" action="/action_page.php">
          <input type="text" placeholder="Search Events..." name="search2"/>
          <button type="submit"><i class="fa fa-search"></i></button>
          </form> */}
          <div class="dropdown">
          <button class="dropbtn">☰ Menu</button>
          <div class="dropdown-content">
            <Link to="/Organizer"><a href="#">Create Events</a></Link>
            <a href="#">Select Events</a>
            <a href="#">Modify Events</a>
            <a href="#">Delete Events</a>
            <a href="#">Add to Calender</a>
          </div>
          </div>
          <div className="homeback">
            <div className="hel">
          <p className="lets">Lets Organize and Attend Events Together!</p>
          <h3 className='are'>Are you an</h3>
          <Link to="/Attendee"><button className='att'>Attendee</button></Link>
        <Link to="/Organizer"><button className='org'>Organizer</button></Link>
        </div>
          <img src="https://img.freepik.com/free-vector/manager-with-checklist-creating-event-plan-development-event-management-planning-service-how-plan-event-planning-software-concept-pinkish-coral-bluevector-isolated-illustration_335657-1351.jpg?w=1060&t=st=1689068993~exp=1689069593~hmac=6940ecd052c102567b1d870ff7213c8b1741cc565fd800e8c6f2f6fa20aa1f39" alt="pic" className='pic'></img>
          <div class="scroll-container">
          <img src="https://img.freepik.com/free-photo/decorated-banquet-hall-with-served-round-table-with-hydrangea-centerpiece-chiavari-chairs_8353-10059.jpg?size=626&ext=jpg&ga=GA1.1.1070303954.1688896054&semt=ais" alt="image1" width="500" height="400"></img>
          <img src="https://img.freepik.com/free-photo/groom-bride-s-wedding-table-decorated-with-flowers-candles_8353-10400.jpg?size=626&ext=jpg&ga=GA1.1.1070303954.1688896054&semt=ais" alt="image2" width="500" height="400"></img>
          <img src="https://img.freepik.com/premium-photo/close-up-equipment-disco-club_88135-12417.jpg?size=626&ext=jpg&ga=GA1.1.1070303954.1688896054&semt=ais" alt="image3" width="500" height="400"></img>
          <img src="https://img.freepik.com/free-photo/people-having-fun-wedding-hall_1303-19593.jpg?size=626&ext=jpg&ga=GA1.1.1070303954.1688896054&semt=ais" alt="image4" width="500" height="400"></img>
          </div>
          <footer className='footer'>
          <p class="foot4">FAQs </p>
          <p class="foot3">Support  </p>
          <p class="foot2">Privacy Policy  </p>
          <p class="foot1"> Terms and Conditions  </p>
          <p className="foot5">Copyright © 2023 iDoEventZ</p>
          <p className="foot6">Contact Us</p>
          </footer>
          </div>
          </>
  )
}