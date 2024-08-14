import React from "react";
import profilePic from "/assets/pm.png";
const AboutMePage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      <section
        id="about"
        className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white"
      >
        <div className="absolute inset-0">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-12 mb-12">
            <div className="flex items-center mb-8">
              <img
                src={profilePic}
                alt="Profile Picture"
                className="w-32 h-32 rounded-full shadow-lg mr-6"
              />
              <div>
                <h2 className="text-gray-800 text-3xl font-bold mb-4">
                  Hi, I'm Peter Mbugua!
                </h2>
                <p className="text-gray-800 mb-4">
                  I’m a passionate software developer with extensive experience
                  in building robust and scalable web applications. My journey
                  in technology has given me a strong foundation in various
                  technologies and frameworks.
                </p>
                <p className="text-gray-800 mb-4">
                  Over the years, I have honed my skills in Python, Django,
                  FastAPI, Bootstrap, and Node.js. I enjoy solving complex
                  problems and creating innovative solutions that enhance user
                  experiences and drive business success.
                </p>
                <p className="text-gray-800 mb-4">
                  Whether it's developing a feature-rich eCommerce platform or
                  designing a fast and efficient API, I bring dedication and
                  expertise to every project I undertake.
                </p>
              </div>
            </div>
            <h3 className="text-gray-800 text-2xl font-bold mb-4">
              Skills & Technologies
            </h3>
            <ul className="list-disc list-inside mb-8 text-gray-800">
              <li>
                <strong>Python:</strong> Expertise in Python programming and
                scripting.
              </li>
              <li>
                <strong>Django:</strong> Building scalable and secure web
                applications.
              </li>
              <li>
                <strong>FastAPI:</strong> Creating high-performance APIs with
                modern features.
              </li>
              <li>
                <strong>Bootstrap:</strong> Designing responsive and
                user-friendly interfaces.
              </li>
              <li>
                <strong>Node.js:</strong> Developing server-side applications
                and APIs.
              </li>
            </ul>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Professional Experience
            </h3>
            <p className="text-gray-800 mb-4">
              I have worked on a diverse range of projects, from small-scale
              applications to large enterprise solutions. My experience includes
              collaborating with cross-functional teams, managing project
              timelines, and delivering high-quality software solutions.
            </p>
            <p className="text-gray-800 mb-4">
              My approach to development is centered around clean code,
              efficient problem-solving, and a user-centric mindset. I am always
              eager to learn new technologies and embrace challenges that push
              me to grow as a developer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
