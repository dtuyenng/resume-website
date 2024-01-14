import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menubar-grid">
      <div className="menu-item">
        <Link className="links" to="/aboutme">
          <span className="material-symbols-outlined">photo_camera_front</span>
          <span className="menu-item-label">Resume</span>
        </Link>
      </div>
      <div className="menu-item">
        <Link className="links" to="/contact">
          <span className="material-symbols-outlined">mail</span>
          <span className="menu-item-label">Contact</span>
        </Link>
      </div>

      <span className="menu-item-latest"></span>

      <div className="menu-item">
        <Link className="links" to="/aboutme">
          <span className="material-symbols-outlined">gallery_thumbnail</span>
          <span className="menu-item-label">Project 1</span>
        </Link>
      </div>
      <div className="menu-item">
        <Link className="links" to="/aboutme">
          <span className="material-symbols-outlined">gallery_thumbnail</span>
          <span className="menu-item-label">Project 2</span>
        </Link>
      </div>
      <div className="menu-item">
        <Link className="links" to="/aboutme">
          <span className="material-symbols-outlined">gallery_thumbnail</span>
          <span className="menu-item-label">Project 3</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
