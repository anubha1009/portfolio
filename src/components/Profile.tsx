import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { useDarkMode } from "./DarkModeContext";
import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";

function Profile() {
  const [init, setInit] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine) => {
        console.log("Particles.js library loaded");
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: isDarkMode ? "#e3afbc" : "#360011",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 30,
            duration: 1.4,
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "#360011" : "#e3afbc",
        },
        links: {
          color: isDarkMode ? "#360011" : "#e3afbc",
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: false,
      fullScreen: false,
    }),
    [isDarkMode]
  );

  const ParticlesComponent = React.memo(() => (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
      className="w-full h-80 rounded-lg"
    />
  ));
  const [selectedTab, setSelectedTab] = useState("Work Experience");

  return (
    <div className="w-[99%] flex flex-col rounded-lg py-5 justify-center items-center">
      {/* Cover*/}
      <div className="w-[99%] relative shadow-xl">
        {init && <ParticlesComponent />}

        <div className="absolute left-[45%] top-3/4 w-40 h-40">
          <img
            src="anubha.jpeg"
            alt="profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-c-maroon dark:border-c-light-pink shadow-lg"
          />
        </div>
      </div>

      {/* Placeholder div */}
      <div className="w-[99%] h-20"></div>

      {/* Profile Information */}
      <div className="w-[99%] flex flex-col justify-center items-center py-2">
        <h1 className="text-2xl font-bold text-c-maroon dark:text-c-light-pink">
          Anubha Vishwakarma
        </h1>
        <h2 className="text-lg text-c-maroon dark:text-c-light-pink">
          Kansas City, MO
        </h2>

        <div className="flex justify-center items-center gap-10 mt-3">
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-lg text-c-maroon dark:text-c-light-pink">
              4+ years
            </h3>
            <h4 className="text-sm text-c-maroon dark:text-c-light-pink">
              Work Experience
            </h4>
          </div>

          <div className="flex flex-col items-center gap-1">
            <h3 className="text-lg text-c-maroon dark:text-c-light-pink">
              Graduate Student at UCM
            </h3>
            <h4 className="text-sm text-c-maroon dark:text-c-light-pink">
              Computer Information System
            </h4>
          </div>

          <div className="flex flex-col items-center gap-1">
            <h3 className="text-lg text-c-maroon dark:text-c-light-pink">
              Software Development
            </h3>
            <h4 className="text-sm text-c-maroon dark:text-c-light-pink">
              Full Stack / Web Developer
            </h4>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-[99%] grid grid-cols-4 gap-4 grid-rows-1 mt-4">
        <div
          className={`col-span-1 row-span-1 font-bold cursor-pointer rounded-lg p-2 ${
            selectedTab === "Work Experience"
              ? "bg-c-light-pink dark:bg-c-maroon-dark text-c-maroon-dark dark:text-c-light-pink"
              : "bg-c-white dark:bg-c-maroon text-c-maroon dark:text-c-light-pink"
          } hover:bg-c-light-pink dark:hover:bg-c-maroon-dark hover:text-c-maroon-dark dark:hover:text-c-light-pink`}
          onClick={() => setSelectedTab("Work Experience")}
        >
          <h3 className="flex justify-center text-lg">Work Experience</h3>
        </div>

        <div
          className={`col-span-1 row-span-1 font-bold cursor-pointer rounded-lg p-2 ${
            selectedTab === "Education"
              ? "bg-c-light-pink dark:bg-c-maroon-dark text-c-maroon-dark dark:text-c-light-pink"
              : "bg-c-white dark:bg-c-maroon text-c-maroon dark:text-c-light-pink"
          } hover:bg-c-light-pink dark:hover:bg-c-maroon-dark hover:text-c-maroon-dark dark:hover:text-c-light-pink`}
          onClick={() => setSelectedTab("Education")}
        >
          <h3 className="flex justify-center text-lg">Education</h3>
        </div>

        <div
          className={`col-span-1 row-span-1 font-bold cursor-pointer rounded-lg p-2 ${
            selectedTab === "Skills"
              ? "bg-c-light-pink dark:bg-c-maroon-dark text-c-maroon-dark dark:text-c-light-pink"
              : "bg-c-white dark:bg-c-maroon text-c-maroon dark:text-c-light-pink"
          } hover:bg-c-light-pink dark:hover:bg-c-maroon-dark hover:text-c-maroon-dark dark:hover:text-c-light-pink`}
          onClick={() => setSelectedTab("Skills")}
        >
          <h3 className="flex justify-center text-lg">Skills</h3>
        </div>

        <div
          className={`col-span-1 row-span-1 font-bold cursor-pointer rounded-lg p-2 ${
            selectedTab === "Projects"
              ? "bg-c-light-pink dark:bg-c-maroon-dark text-c-maroon-dark dark:text-c-light-pink"
              : "bg-c-white dark:bg-c-maroon text-c-maroon dark:text-c-light-pink"
          } hover:bg-c-light-pink dark:hover:bg-c-maroon-dark hover:text-c-maroon-dark dark:hover:text-c-light-pink`}
          onClick={() => setSelectedTab("Projects")}
        >
          <h3 className="flex justify-center text-lg">Projects</h3>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-[99%] shadow-xl rounded-lg pl-8 pr-8 pt-8 mt-3 bg-c-light-pink dark:bg-c-maroon-dark">
        {selectedTab === "Work Experience" && <WorkExperience />}
        {selectedTab === "Education" && <Education />}
        {selectedTab === "Skills" && <Skills />}
        {selectedTab === "Projects" && <Projects />}
      </div>
    </div>
  );
}

export default Profile;
