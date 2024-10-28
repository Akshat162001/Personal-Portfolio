import React from "react";

const ProjectCard = ({heading, subHeading, details, link, github, icon}) => {
    return (
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">{heading}</h3>
          <div class="subheading mb-3">{subHeading}</div>
          <div>{details}</div>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">
            <a class="btn btn-primary mb-2" href={link} role="button">
              Visit Site {icon}
            </a>
            <br></br>
            <a class="btn btn-primary" href={github} role="button">
              See on Github {icon}
            </a>
          </span>
        </div>
      </div>
    );
}

export default ProjectCard;