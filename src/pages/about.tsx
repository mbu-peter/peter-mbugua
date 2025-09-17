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
          <h1 className="text-4xl font-bold text-center mb-12">About</h1>
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
                  Nothing much here, just an Engineer who enjoys solving problems through software applications. My journey
                  in technology has given me a strong foundation in various
                  technologies and frameworks.
                </p>
                <p className="text-gray-800 mb-4">
                  Over the years, I have worked with java, Python, Django,
                  FastAPI, and Spring Boot. I enjoy solving problems
                 with code.
                </p>
                <p className="text-gray-800 mb-4">
                  I bring value and
                  aura in every project am involved in.
                </p>
              </div>
            </div>
            <h3 className="text-gray-800 text-2xl font-bold mb-4">
              Skills & Technologies
            </h3>
            <ul className="list-disc list-inside mb-8 text-gray-800">
              <li>
                <strong>Java:</strong> Understand Core Java.
              </li>
              <li>
                <strong>Spring Boot:</strong> For Building scalable and secure software
                applications. I love spring boot!!!
              </li>
              <li>
                <strong>FastAPI:</strong> Creating high-performance APIs with
                modern features.
              </li>
            </ul>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Professional Experience
            </h3>
            <p className="text-gray-800 mb-4">
              I’ve built everything from scrappy little apps that barely needed coffee to large production ready Applications that probably should come with a user manual(not too large though😅). 
              Along the way, I’ve juggled deadlines, wrangled cross-functional teams, and still managed to ship software that actually works (most of the time on purpose).
            </p>
            <p className="text-gray-800 mb-4">
             My approach to development? Keep the code clean enough that future-me doesn’t want to fight past-me, solve problems without overcomplicating them, and always think about the the user who has to click the buttons. 
             “figuring it out” is basically half the job..
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
