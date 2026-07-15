import Container from "./Container";

function About() {
  return (
    <section
      id="about"
      className="py-12 scroll-mt-20 bg-white"
    >
      <Container>

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-lg leading-9 text-gray-600">
          I'm a Senior .NET Developer with over 7 years of
          experience building enterprise applications using
          C#, ASP.NET Core, Azure, SQL Server and REST APIs.

          I have worked across Energy, Utilities,
          Insurance and Investment Management domains,
          including onsite experience in Australia
          supporting a major SAP S/4HANA transformation.
        </p>

      </Container>
    </section>
  );
}

export default About;