import Container from "./Container";


function Hero() {
  return (
   <section className="min-h-screen flex items-center bg-slate-50 pt-20">
  <Container>

      <div className="max-w-7xl mx-auto px-8">

        <p className="text-blue-600 font-semibold text-lg">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold mt-3">
          Asha Vemparambil
        </h1>

        <h2 className="text-3xl text-gray-600 mt-5">
          Senior .NET Developer
        </h2>

        <p className="mt-8 text-xl max-w-3xl text-gray-600 leading-9">

          Building scalable enterprise applications
          using C#, .NET, Azure,
          SQL Server and REST APIs.

        </p>

        <div className="mt-10 flex gap-5">

  <a
  href="/resume.pdf"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
>
  Download Resume
</a>
<a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">Contact Me</a>
         
        </div>

      </div>
  
  </Container>
</section>
  );
}

export default Hero;
