import react from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.styles.css";

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">
      <i class="bx bxl-stripe"></i>
      <div className="logo-name">Skill Board</div>
    </div>
    <div className="apply-job">
      <NavLink to="/">
        <span className="material-icons">assignment_turned_in</span>
        <span className="available">Available for job</span>
      </NavLink>
    </div>
    <ul className="dashboard-list">
      <li>
        <NavLink to="/" className="dashboard-links">
          <span className="material-icons">home</span>
          <span className="link-name">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="dashboard-links">
          <span className="material-icons">assignment_turned_in</span>
          <span className="link-name">Profile</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="dashboard-links">
          <span className="material-icons">forum</span>
          <span className="link-name">Apply for jobs</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="dashboard-links">
          <span className="material-icons">mail_outline</span>
          <span className="link-name">Mailbox</span>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Sidebar;
