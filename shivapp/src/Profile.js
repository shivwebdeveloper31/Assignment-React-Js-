import React from 'react';
import './Dashboard.css';
import './Profile.css';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';






const Profile = () => {
  return (
    <>
      <div className="navbar">
        <div className="heading">User Profile</div>
        <div className="search">
          <form action="#">
            <input type="text"
              placeholder=" Search Courses"
              name="search" />
            <button>
              <i className="fa fa-search">
              </i>
            </button>
          </form>
          <div className="Icons">
            <div className="Dashboard">
              <NavLink to="/Dashboard" Dashboard><i class="fas fa-table"></i></NavLink>
            </div>

            <div className="Notification">
              <NavLink to="notification" Notification><i class="fas fa-bell"></i></NavLink>
            </div>

            <div className="User">
              <NavLink to="/profile" User Profile><i class="fas fa-user"></i></NavLink>
            </div>
          </div>

        </div>
      </div>

      <div className="Details">
        <div style={{ marginLeft: '10px', marginTop: '60px', }}>
          <Box className="main-box" color="white" bgcolor="palevioletred" borderRadius="20px" p={1}>
            <Box className="only-box" color="white" bgcolor="green" position="absolute" height="50px"  marginLeft="27px" p={1}>
              Edit Profile
              <Box color="white" fontSize="12px" marginTop="6px">
                Completed Your Profile
              </Box>
            </Box>
            <form id="contact-form" style={{ marginTop: '70px' }} method="POST">
              <div className="first-row">
                <input type="company" size="27" id="company"
                  placeholder="Company" required="true" />

                <input type="username" size="27" id="username"
                  placeholder="Username" required="true" />


                <input type="Email" size="27" id="email"
                  placeholder="Email" required="true" />
              </div>



              <div className="second-row">
                <input type="name"  id="fname"
                  placeholder="Name" required="true" />

                <input type="lastname"  id="lname"
                  placeholder="Last name" required="true" />
              </div>

              <div className="third-row">
                <input type="company" size="27" id="company"
                  placeholder="details" required="true" />

                <input type="username" size="27" id="username"
                  placeholder="Username" required="true" />


                <input type="Email" size="27" id="email"
                  placeholder="Email" required="true" />
              </div>
              <div className="about-us" style={{ marginTop: "30px" }}>
                About me
              </div>

              <div className="line">
                Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo
              </div>

              <div className="third-row" style={{ marginTop: "25px" }}>
                <textarea placeholder="message" cols="30" rows="5"></textarea>

              </div>

              <div className="fourth-row" style={{ marginTop: "15px", marginLeft: "10px", }} >
                <button className="button" type="submit" bgcolor="green">Update Profile</button>
              </div>

            </form>
          </Box>
        </div>
      </div>
    </>


  );
};


export default Profile;