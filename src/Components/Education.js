import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
    return (
      <div>
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <EducationCard
              heading={"KIET Group of Institution"}
              subHeading={"Bachelor of Technology"}
              details={"Information Technology"}
              percentage={"CGPA : 8.5"}
              timePeriod={"November 2021 - May 2025"}
            />
            
            <EducationCard
              heading={"Lucknow Public School"}
              subHeading={"Intermediate"}
              details={"PCM+Computer Science"}
              percentage={"Percentage: 91.2 %"}
              timePeriod={"April 2019 - March 2020"}
            />
            <EducationCard
            heading={"Lucknow Public School"}
            subHeading={"High School Degree"}
            details={"Science, Hindi, English, Mathematics, Social Science"}
            percentage={"Percentage: 88.6 %"}
            timePeriod={"April 2017 - March 2018"}
          />
          </div>
        </section>
        <hr class="m-0" />
      </div>
    );
}

export default Education;