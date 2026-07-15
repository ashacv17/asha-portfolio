import Container from "./Container";

const projects = [
  {
    title: "SAP ECC to SAP S/4HANA Transformation",
    description:
      "Enterprise migration project supporting Australia's energy sector using .NET, Azure DevOps, SAP integration, and automated testing.",
  },
  {
    title: "Investment Data Management Platform",
    description:
      "Developed REST APIs, Azure Cosmos DB integration, validation workflows, and backend services for enterprise investment operations.",
  },
  {
    title: "Enterprise Application Development",
    description:
      "Designed scalable enterprise applications using C#, ASP.NET Core, SQL Server, Azure, and modern software engineering practices.",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-12 scroll-mt-20 bg-slate-50">
      <Container>
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;