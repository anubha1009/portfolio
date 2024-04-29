import { education } from "../db";

interface EducationProps {
  type: string;
  major: string;
  institution: string;
  start: string;
  end: string;
  location: string;
  gpa: string;
}

function Education() {
  const educations: EducationProps[] = education;
  return (
    <div className="text-c-maroon dark:text-c-light-pink">
      {educations.map((education, index) => (
        <div
          key={index}
          className="bg-c-light-pink dark:bg-c-maroon shadow-c-light dark:shadow-c-dark rounded-xl p-6 mb-7"
        >
          <h3 className="text-2xl font-bold">{education.type} in</h3>
          <div className="flex">
            <h4 className="text-lg font-semibold">{education.major}</h4>
            <div className="text-md font-semibold justify-end ms-auto">
              {education.start} - {education.end}
            </div>
          </div>
          <div className="flex">
            <h4 className="text-lg font-semibold ml-6">
              {education.institution}
            </h4>
            <div className="text-md font-semibold justify-end ms-auto">
              {education.location}
            </div>
          </div>

          <div className="flex justify-end ms-auto mt-4">
            <h4 className="text-lg font-semibold ml-6">GPA: {education.gpa}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
