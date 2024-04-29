import { projects } from "../db";

interface ProjectProps {
  title: string;
  link: string;
  technologies: string[];
}

function Projects() {
  const projectList: ProjectProps[] = projects;
  console.log(projectList);
  return (
    <div className="text-c-maroon dark:text-c-light-pink">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="bg-c-light-pink dark:bg-c-maroon shadow-c-light dark:shadow-c-dark rounded-xl p-6 mb-7"
        >
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <div className="flex">
            <h4 className="text-lg font-bold ml-2">
              Technologies:
              <ul className="font-normal ml-4">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </h4>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold justify-end ms-auto"
            >
              Github
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
