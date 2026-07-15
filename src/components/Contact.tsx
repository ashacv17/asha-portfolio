import Container from "./Container";

function Contact() {
  return (
    <section id="contact" className="py-12 scroll-mt-20bg-white">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact
        </h2>

        <div className="text-center space-y-4 text-lg">
          <p>📧 ashacv17@gmail.com</p>

          <p>📱 +61 499254910</p>

          <p>📍 Brisbane, Queensland, Australia</p>

          <p>
            GitHub:
            <a
              href="https://github.com/ashacv17"
              className="text-blue-600 ml-2"
              target="_blank"
            >
              ashacv17
            </a>
          </p>

          <p>
            LinkedIn:
            <a
              href="https://linkedin.com/in/asha-prince"
              className="text-blue-600 ml-2"
              target="_blank"
            >
              linkedin.com/in/asha-prince
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Contact;00000