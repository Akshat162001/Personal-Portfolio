import React from "react"
import { SiLeetcode } from "react-icons/si"

const About = () => {
    return (
      <div>
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Akshat
              <span class="text-primary">Verma</span>
            </h1>
            <div class="subheading mb-5">
              Full Stack Developer ·
              <a href="mailto:akshatvermaav4@gmail.com">
              akshatvermaav4@gmail.com
              </a>
            </div>
            <p class="lead mb-5">
            I'm Akshat Verma, a passionate Information Technology student at KIET Group of Institutions, dedicated to realizing my dream of becoming a proficient software developer in a dynamic company environment.
            Eager to delve into new technologies, I embrace challenges wholeheartedly, continually expanding my skills and knowledge. Currently focusing on Backend Development, I strive for excellence in every aspect of my journey.
            </p>
            <div class="social-icons">
              <a
                class="social-icon"
                href="https://www.linkedin.com/in/akshat-verma-659929231/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/Akshat162001">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://leetcode.com/Akshatverma16072001/">
                <SiLeetcode />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
}

export default About;