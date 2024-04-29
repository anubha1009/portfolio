import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import { skills } from "../db";

interface SkillsProps {
  title: string;
  description: Skill[];
}

interface Skill {
  name: string;
  rating: number;
}

const myStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ee4c7c",
  inactiveFillColor: "#480017",
};

function Skills() {
  const skillsList: SkillsProps[] = skills;

  return (
    <div className="text-c-maroon dark:text-c-light-pink">
      {skillsList.map((skill, index) => (
        <div
          key={index}
          className="bg-c-light-pink dark:bg-c-maroon shadow-c-light dark:shadow-c-dark rounded-xl p-6 mb-7"
        >
          <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
          <ul className="ml-4">
            {skill.description.map((desc, index) => (
              <li key={index} className="flex justify-between">
                <h4 className="text-lg font-semibold">{desc.name}</h4>
                <Rating
                  value={desc.rating}
                  style={{ maxWidth: "200px" }}
                  itemStyles={myStyles}
                  readOnly
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
