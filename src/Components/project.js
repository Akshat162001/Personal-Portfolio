import React from "react";
import ProjectCard from "./projectCard";
import { FiExternalLink } from "react-icons/fi";
const Project = () => {
  return (
    <div>
      <section class="resume-section" id="project">
        <div class="resume-section-content">
          <h2 class="mb-5">Projects</h2>
          <ProjectCard
            heading={"ChatBot-Gemini"}
            subHeading={
              "A tool that can be used as a chatbot will help you search for things."
            }
            details={
              "A chatbot can retrieve FAQs, troubleshoot common issues, and direct users to the appropriate human representative when necessary, thereby enhancing the overall user experience. By providing immediate responses and 24/7 availability, chatbots make it easier for users to find the information they need quickly and efficiently."
            }
            link={
              "https://chat-bot-gemini-eight.vercel.app/"
            }
            github={"https://github.com/Akshat162001/ChatBot-Gemini"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"Musically"}
            subHeading={"Audio player to play music as user likes"}
            details={
              "An audio player API build uisng reactjs allows developers to integrate music playback features into applications, enabling users to play, pause, skip, and customize playlists according to their preferences. It supports various audio formats and can provide features like volume control and shuffle options, enhancing the overall user experience with personalized music enjoyment."
            }
            link={
              "https://url-small.netlify.app/"
            }
            github={"https://github.com/Akshat162001/Musically"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"Contact Manager List"}
            subHeading={"Tool which can be used to Contact Manage"}
            details={
              "Effortlessly manage your daily tasks with this tool. Its user-friendly interface allows for easy recording and organization of your daily tasks or jobs. Stay organized and keep track of your tasks efficiently with this convenient and user-friendly tool."
            }
            link={"https://contact-manager-app-tau.vercel.app/"}
            github={"https://github.com/Akshat162001/Contact_Manager_App"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"Currency Converter"}
            subHeading={"A tool to convert currency into any desired form easily."}
            details={
              "This tool allows users to convert currency into various forms effortlessly. Whether you need to switch between different currencies for travel, shopping, or investment, it provides accurate rates and quick calculations to meet your needs."
            }
            link={"https://currency-converter-beryl.vercel.app/"}
            github={"https://github.com/Akshat162001/CurrencyConverter"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"WeatherForcast"}
            subHeading={"Tool which can be used to access Weather Information"}
            details={
              "Easily retrieve weather information using this tool. It offers the capability to obtain weather data for any location, including the user's current location. With its user-friendly interface, accessing weather information becomes effortless. Get accurate and up-to-date weather data with this convenient and user-friendly tool."
            }
            link={"https://weather-forcast-beta.vercel.app/"}
            github={"https://github.com/Akshat162001/Weather-Forcast"}
            icon={<FiExternalLink />}
          />
        </div>
      </section>
      <hr class="m-0" />
    </div>
  );
};

export default Project;
