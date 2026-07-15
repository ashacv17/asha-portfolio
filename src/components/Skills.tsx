import Container from "./Container";

const skills = [
  "C#",
  ".NET Core",
  "ASP.NET Core",
  "Web API",
  "SQL Server",
  "Azure",
  "Azure DevOps",
  "Cosmos DB",
  "Entity Framework",
  "REST API",
  "Git",
  "GitHub",
  "Blazor",
  "React",
  "Agile",
  "CI/CD",
];

function Skills() {
  return (
    <section id="skills" className="py-12 scroll-mt-20 bg-slate-50">
      <Container>
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white shadow rounded-full px-6 py-3 text-gray-700 font-medium hover:bg-blue-600 hover:text-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;