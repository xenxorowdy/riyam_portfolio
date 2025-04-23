import { Navigation } from "../components/nav";

const Experience = () => {
  const dentiraList = [
    "Engineered Rx processing workflows using Python & REST APIs - 25% faster processing",
    "Enhanced mobile UI/UX with React - 30% higher engagement",
    "Built microservices for dental scanner integration - 40% faster document processing",
    "Automated financial data collection - 50% reduction in errors",
    "Led integrations with Lab Management Systems and dental scanners",
    "Optimized Rx mappings and achieved 95% user satisfaction",
  ];

  const bambooList = [
    "Built data visualization dashboards and analytics tools",
    "Led CRM integrations with Salesforce, HubSpot, and more",
    "Designed & launched centralized Campaign Hub",
    "Reduced website downtime by 25% through optimizations",
    "Collaborated across teams to enhance product quality",
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "React Native",
    "SQL",
    "MongoDB",
  ];
  return (
     <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
       <Navigation/>
    <div className=" py-8 px-4 sm:px-6 md:px-8">
      <h3 className="text-lg sm:text-xl font-semibold text-zinc-200 my-10 text-center">
        Experience
      </h3>
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        <div className="border border-zinc-700 rounded-lg p-4 sm:p-6 bg-gradient-to-b from-zinc-900/50 to-zinc-900/30">
          <h3 className="text-lg sm:text-xl font-semibold text-zinc-200 mb-2 sm:mb-4">
            Dentira{" "}
            <span className="text-zinc-500 font-normal text-base sm:text-lg">
              • SDE-II
            </span>
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mb-2 sm:mb-4">
            Bengaluru, IN • Nov 2023 - Present
          </p>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-zinc-400">
            {dentiraList.map((item) => (
              <li>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="border border-zinc-700 rounded-lg p-4 sm:p-6 bg-gradient-to-b from-zinc-900/50 to-zinc-900/30">
          <h3 className="text-lg sm:text-xl font-semibold text-zinc-200 mb-2 sm:mb-4">
            Bamboobox{" "}
            <span className="text-zinc-500 font-normal text-base sm:text-lg">
              • Software Engineer
            </span>
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mb-2 sm:mb-4">
            Bengaluru, IN • Jun 2021 - Nov 2023
          </p>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-zinc-400">
            {bambooList.map((item) => (
              <li>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-800 text-zinc-400 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    N</div>
     </div>
  );
};

export default Experience;
