import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
import Notification from './Notification';
import Box from '@material-ui/core/Box';





const Dashboard = () => {
  return (


    <>
      <div className="navbar">
        <div className="heading">Dashboard</div>
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
      <div className="middle">
        <div style={{ marginLeft: '10px', marginTop: '60px', width: '18%', }}>
          <Box className="fix" color="white" bgcolor="palevioletred" height="90px" p={1}>
            <Box className="small-box3" color="white" bgcolor="#FFEA61" height="50px" width="60px" position="absolute" top="100px" p={1}>
              <i className="far fa-clone"></i>
            </Box>
            <div className="name">
              Used Space
            </div>
            <div className="number-space">
              49/50 GB 

            </div>
            <div className="text-3">
              <i class="fas fa-exclamation-triangle" style={{ color: "red", marginRight: "4px" }}></i>
              Get More Details
            </div>
          </Box>
        </div>

        <div style={{ marginLeft: '10px', marginTop: '60px', width: '18%', }}>
          <Box className="fix" color="white" bgcolor="palevioletred" height="90px" p={1}>
            <Box className="small-box2" color="white" bgcolor="#4DED30" height="50px" width="60px" position="absolute" top="100px" p={1}>
              <i className="fas fa-store" style={{ fontSize: "30px", padding: "10px" }} ></i>
            </Box>
            <div className="name">
              Revenue
            </div>
            <div className="number">
              $34.245
            </div>
            <div className="text">
              <i class="fas fa-calendar-times" style={{ color: "black", marginRight: "4px", marginLeft: "2px" }}></i>
              Last 24 Hours
            </div>
          </Box>
        </div>

        <div style={{ marginLeft: '10px', marginTop: '60px', width: '18%', }}>
          <Box className="fix" color="white" bgcolor="palevioletred" height="90px" p={1}>
            <Box className="small-box1" color="white" bgcolor="#FF7F7F" height="50px" width="60px" position="absolute" top="100px" p={1}>
              <i className="fas fa-exclamation-circle" style={{ fontSize: "30px", padding: "10px", marginLeft: "4px" }}></i>
            </Box><div className="name">
              Fixed Issues
            </div>
            <div className="number-issues">
              75
            </div>
            <div className="text">
              <i class="fas fa-tags" style={{ color: "black", marginRight: "4px", marginLeft: "2px" }}></i>
              Tracked from Github
            </div>
          </Box>
        </div>

        <div style={{ marginLeft: '10px', marginTop: '60px', width: '18%', }}>
          <Box className="fix" color="white" bgcolor="palevioletred" height="90px" p={1}>
            <Box className="small-box" color="white" bgcolor="#7AD7F0" height="50px" width="60px" position="absolute" top="100px" p={1}>
              <i className="fas fa-male" style={{ fontSize: "30px", padding: "10px", marginLeft: "14px" }}></i>
            </Box>
            <div className="name-followers">
              Followers
            </div>
            <div className="number-followers">
              +245
            </div>
            <div className="text">
              <i class="fas fa-clock" style={{ color: "black", marginRight: "4px", marginLeft: "2px" }}></i>
              Just Updated
            </div>
          </Box>
        </div>


      </div>


      <div className="graph">

        <div style={{ marginLeft: '10px', marginTop: '60px', width: '31%', }}>
          <Box className="big" color="white" bgcolor="palevioletred" height="295px" box-shadow="0 4px 8px 0 rgba(0,0,0,0.2)"
            transition="0.3s" p={1}>
            <Box color="white" height="200px" width="22.5%" position="absolute" top="300px" p={1}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_8iuPZ-mTC8h2nvJF4XjbnM4wahVTInZHw&usqp=CAU" className="photo" alt="Avatar" />
            </Box>
            <div className="name2">
              Daily Sale
            </div>
            <div className="growth">
            <i class="fas fa-arrow-up" style={{color:"green", marginRight:"2px"}}></i>
              55%, increase in today sales
            </div>
            <div className="text2">
              <i class="fas fa-clock" style={{ color: "black", marginRight: "4px", marginLeft: "2px" }}></i>
              Updated 4 months ago
            </div>
          </Box>
        </div>

        <div style={{ marginLeft: '10px', marginTop: '60px', width: '31%', }}>
          <Box className="big" color="white" bgcolor="palevioletred" height="295px" box-shadow="0 4px 8px 0 rgba(0,0,0,0.2)"
            transition="0.3s" p={1}>
            <Box color="white" height="200px" width="22.5%" position="absolute" top="300px" p={1}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_SmOzt6BV_I-s46np0f8x0rTcjK6XonX9A&usqp=CAU" className="photo1" alt="Avatar" />
            </Box>
            <div className="name2">
              Email Subscriptions
            </div>
            <div className="growth">
            Last Campaign Performance
            </div>
            <div className="text2">
              <i class="fas fa-clock" style={{ color: "black", marginRight: "4px", marginLeft: "2px" }}></i>
              Campaign sent 2 days ago
            </div>
          </Box>
        </div>


        <div style={{ marginLeft: '10px', marginTop: '60px', width: '31%', }}>
          <Box className="big" color="white" bgcolor="palevioletred" height="295px"
            transition="0.3s" p={1}>
            <Box color="white" height="200px" width="22.5%" position="absolute" top="300px" p={1}>
              <img src="https://thumbs.dreamstime.com/b/business-chart-arrow-downtrend-line-graph-bar-chart-stock-numbers-red-color-background-bear-market-93730237.jpg" className="photo2" alt="Avatar" />
            </Box>
            <div className="name2">
              Completed Tasks
            </div>
            <div className="growth">
              Last Campaign Performance
            </div>
            <div className="text2">
              <i class="fas fa-clock" style={{ color: "black", marginRight: "4px", marginLeft: "2px" }}></i>
              Campaign sent 2 days ago
            </div>
          </Box>
        </div>

      </div>
    </>







  );
};

export default Dashboard;