import React from "react"
import {
  FaHtml5,
  FaNode,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPython,
  FaAws,
  
  FaGithub,
} from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
    return (
      <div>
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i title="HTML">
                  <FaHtml5 />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="CSS">
                  <FaCss3Alt />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="Javascript">
                  <SiJavascript />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="Python">
                  <FaPython />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="Python">{/* <TbBrandCpp /> */}</i>
              </li>
            </ul>

            <div class="subheading mt-5">FrameWorks</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i title="Bootstrap">
                  <FaBootstrap />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="React">
                  <FaReact />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="NodeJS">
                  <FaNode />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="Express">
                  <SiExpress />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="Django">
                  <DiDjango />
                </i>
              </li>
            </ul>

            <div class="subheading mt-5">Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i title="MongoDB">
                  <SiMongodb />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="AWS">
                  <FaAws />
                </i>
              </li>
              
              <li class="list-inline-item">
                <i title="Github">
                  <FaGithub />
                </i>
              </li>
              <li class="list-inline-item">
                <i title="Postman">
                  <SiPostman />
                </i>
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    );
} 

export default Skills;