import ContactForm from "@/components/ContactForm";
import { CarouselPlugin } from "@/components/MainNav";
import cart1 from "/assets/cart1.png";
import home from "/assets/home.png";
import search from "/assets/search.png";
import ship from "/assets/ship.png";
const Homepage = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="relative text-center px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-300">Peter Mbugua</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            A Passionate{" "}
            <span className="font-semibold text-yellow-300">
              Software Developer
            </span>{" "}
            specializing in building amazing web experiences.
          </p>
          <a
            href="/about"
            className="bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            Learn More About Me
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-gray-900 py-20"
      >
        <div className="absolute inset-0">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="relative container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Backend Development
              </h3>
              <p className="text-gray-600">
                Node.js, Express, Python, Django, Flask
              </p>
            </div>
            <div className="text-center p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Frontend Development
              </h3>
              <p className="text-gray-600">
                Reactjs, TailwindCSS, TypeScript, HTML, CSS, bootstrap, jquery
              </p>
            </div>
            <div className="text-center p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Other Skills</h3>
              <p className="text-gray-600">Git, Agile Methodologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-gray-900 py-20"
      >
        <div className="absolute inset-0">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="relative container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
              <CarouselPlugin
                images={[`${cart1}`, `${home}`, `${search}`, `${ship}`]}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">eCommerce Website</h3>
                <p className="text-gray-600 mb-4">
                  eCommerce site with authentication, payment integration, and a
                  dashboard.
                </p>
                <a href="/project" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
              <CarouselPlugin
                images={[
                  "src/assets/api.png",
                  "src/assets/fast.png",
                  "src/assets/auth.png",
                ]}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Social Media API</h3>
                <p className="text-gray-600 mb-4">
                  FastAPI-powered social media API with advanced authentication
                  and searching functionality.
                </p>
                <a href="/project" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
              <CarouselPlugin
                images={["src/assets/add.png", "src/assets/safa.png"]}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Hotel Booking App</h3>
                <p className="text-gray-600 mb-4">
                  A hotel booking application built with reactjs, mongoDB
                  typescript.
                </p>
                <a href="/project" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      {/* <section
        id="contact"
        className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-20"
      >
        <div className="absolute inset-0">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="relative container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <p className="text-lg mb-8">
            Interested in working together? Let's connect!
          </p>
          <form className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
              >
                Enter Your Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={5}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section> */}
      <ContactForm />
    </>
  );
};

export default Homepage;
