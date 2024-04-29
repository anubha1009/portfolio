import "../App.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useDarkMode } from "./DarkModeContext";
import { personalData } from "../db";

function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode);
  return (
    <div className="w-full flex flex-grow bg-c-light-pink dark:bg-c-dark-pink text-c-dark-pink dark:text-c-light-pink shadow-xl rounded-lg p-4">
      <div className="flex flex-grow justify-start text-start">
        <h1 className="text-4xl font-bold content-end">Anubha Vishwakarma</h1>
        <h2 className="text-2xl italic content-end ml-3">Software Developer</h2>
        <a href="/Resume Anubha Vishwakarma.pdf" target="_blank">
          <div className="flex bg-c-dark-pink dark:bg-c-light-pink text-c-light-pink dark:text-c-dark-pink p-2 rounded-full ms-5 content-center cursor-pointer">
            Printable Resume
          </div>
        </a>
      </div>
      <div className="flex flex-grow justify-end gap-3 mr-5 content-end">
        <div className="text-xl content-end">Socials:</div>
        <a
          href={personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin
            className="content-end cursor-pointer"
            size="2.5rem"
            color="#ee4c7c"
          />
        </a>
        <a href={personalData.github} target="_blank" rel="noopener noreferrer">
          <IoLogoGithub
            className="content-end cursor-pointer"
            size="2.5rem"
            color="#ee4c7c"
          />
        </a>
      </div>
      <div className="justify-end content-end px-4">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default Header;
