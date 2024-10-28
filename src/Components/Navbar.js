import React from "react";
import { Link } from "react-scroll";
import img from "../akshat2.jpg";

const Navbar = () => (
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="about">
        <Link to="about" spy={true} smooth={true} offset={10} duration={500}>
          <span class="d-block d-lg-none">Akshat Verma</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={img}
              alt="..."
              className="image"
            />
          </span>
        </Link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <a class="nav-link js-scroll-trigger" href="about">
                About
              </a>
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <a class="nav-link js-scroll-trigger" href="about">
                Projects
              </a>
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <a class="nav-link js-scroll-trigger" href="about">
                Education
              </a>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <a class="nav-link js-scroll-trigger" href="about">
                Skills
              </a>
            </Link>
            <Link
              to="interests"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <a class="nav-link js-scroll-trigger" href="about">
                Interests
              </a>
            </Link>
           
            <a class="nav-link js-scroll-trigger" href="https://drive.google.com/file/d/18dCS1SgrE6X0PL0LoiOj8hn3r3iK53Cb/view?usp=sharing" download target={"_blank"} rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
