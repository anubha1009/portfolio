import { workExperience } from "../db";

interface WorkExperienceProps {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string[];
  awards: Award[];
}

interface Award {
  title: string;
  date: string;
  description: string;
}

function WorkExperience() {
  const works: WorkExperienceProps[] = workExperience;

  return (
    <div className="text-c-maroon dark:text-c-light-pink">
      {works.map((work, index) => (
        <div
          key={index}
          className="bg-c-light-pink dark:bg-c-maroon shadow-c-light dark:shadow-c-dark rounded-xl p-6 mb-7"
        >
          <h3 className="text-2xl font-bold">{work.title}</h3>
          <div className="flex">
            <h4 className="text-lg font-bold ml-4">{work.company}</h4>
            <div className="text-lg font-semibold justify-end ms-auto">
              {work.start} - {work.end}
            </div>
          </div>
          <h4 className="text-lg font-bold ml-6">{work.location}</h4>

          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            {work.description.map((desc, index) => (
              <li key={index} style={{ marginLeft: "20px" }}>
                {desc}
              </li>
            ))}
          </ul>
          {work.awards.length > 0 && (
            <h4 className="text-lg font-bold mt-2 ml-4">Awards</h4>
          )}
          {work.awards.length > 0 && (
            <ul>
              {work.awards.map((award, index) => (
                <li key={index}>
                  <div className="flex ml-6">
                    <h4 className="text-md font-semibold">{award.title}</h4>
                    <h4 className="text-md font-semibold justify-end ms-auto">
                      {award.date}
                    </h4>
                  </div>
                  <p className="ml-8">{award.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
