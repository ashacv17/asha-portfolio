import Container from "./Container";

const experiences = [
  {
    title: "Senior .NET Developer / Technical Test Manager",
    company: "Tata Consultancy Services | Client: Synergy Australia",
    period: "2025 – 2026",
    description:
      "Worked on a major SAP ECC to SAP S/4HANA transformation, developing enterprise applications, REST APIs, Azure solutions, and leading integration testing.",
  },
  {
    title: "Software Developer",
    company: "Tata Consultancy Services",
    period: "2022 – 2025",
    description:
      "Developed backend services using ASP.NET Core, Azure Cosmos DB, SQL Server, REST APIs and Azure Databricks for enterprise investment management.",
  },
  {
    title: "Software Engineer",
    company: "Xerox Technology Services",
    period: "2019 – 2022",
    description:
      "Developed enterprise applications using C#, ASP.NET, SQL Server and Blazor while supporting Agile delivery.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-12 scroll-mt-20 bg-white">
      <Container>
        <h2 className="text-4xl font-bold mb-12 text-center">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-slate-50 p-8 rounded-xl shadow"
            >
              <h3 className="text-2xl font-semibold">{exp.title}</h3>

              <p className="text-blue-600 font-medium mt-2">
                {exp.company}
              </p>

              <p className="text-gray-500 mb-4">{exp.period}</p>

              <p className="text-gray-700 leading-8">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;