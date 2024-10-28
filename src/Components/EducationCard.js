import React from "react";

const EducationCard = ({heading, subHeading, details, percentage, timePeriod}) => {
    return (
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">{heading}</h3>
          <div class="subheading mb-3">{subHeading}</div>
          <div>{details}</div>
          <p>{percentage}</p>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">{timePeriod}</span>
        </div>
      </div>
    );
}

export default EducationCard

