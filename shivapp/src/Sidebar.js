import React from 'react'
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Tablelist from './Tablelist';
import Typography from './Typography';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shivicons from './Shivicons';
import Notification from './Notification'
import RTLsupport from './RTLsupport';
import Maps from './Maps';
import Upgrade from './Upgrade';



const Sidebar = () => {
    return (
        <div>
            <div className="sidebar" >
                <div className="box">

                    <NavLink to="/Dashboard"><i class="fas fa-table">&nbsp;Dashboard</i></NavLink>
                    <NavLink to="/profile"><i class="fas fa-user">&nbsp;User Profile</i></NavLink>
                    <NavLink to="/tablelist"><i class="fas fa-clipboard-list">&nbsp;Table List</i></NavLink>
                    <NavLink to="typography"><i class="fas fa-file-alt">&nbsp;Typography</i></NavLink>
                    <NavLink to="icons"><i class="fas fa-icons">&nbsp;Icons</i></NavLink>
                    <NavLink to="maps"><i class="fas fa-map-marker-alt">&nbsp;Maps</i></NavLink>
                    <NavLink to="notification"><i class="fas fa-bell">&nbsp;Notification</i></NavLink>
                    <NavLink to="rtlsupport"><i class="fas fa-globe">&nbsp;RTL Support</i></NavLink>
                    <NavLink to="upgrade" className="upgrade"><i class="fas fa-caret-square-up">&nbsp;Upgrade To PRO</i></NavLink>

                </div>

                
                    
                

            </div>

            <div class="content">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/tablelist" component={Tablelist} />
                    <Route exact path="/typography" component={Typography} />
                    <Route exact path="/icons" component={Shivicons} />
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/notification" component={Notification} />
                    <Route exact path="/rtlsupport" component={RTLsupport} />
                    <Route exact path="/upgrade" component={Upgrade} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>

    );
};

export default Sidebar;
