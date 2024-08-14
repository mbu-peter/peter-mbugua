import React from "react";

const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: `
      <p>This is a full-featured ecommerce website built with React, Node.js, and MongoDB. It includes user authentication, product management, and a shopping cart.</p>
      <img src="src/assets/home.png" alt="Ecommerce Website Screenshot" class="my-4 rounded-lg shadow-lg"/>
      <h2>Features:</h2>
      <ul>
        <li>User Authentication</li>
        <li>Product Management</li>
        <li>Shopping Cart Integration</li>
      </ul>
      <img src="src/assets/cart1.png" alt="Feature Screenshot" class="my-4 rounded-lg shadow-lg"/>
      <p>Built with the following technologies:</p>
      <ul>
        <li>Python</li>
        <li>Django</li>
        <li>Postgres</li>
      </ul>
    `,
    demoLink: "#",
  },
  {
    id: 2,
    title: "Social Media API",
    description: `
      <p>This API allows interaction with a social media platform, including user profiles, posts, and comments.</p>
      <img src="src/assets/fast.png" alt="Social Media API Screenshot" class="my-4 rounded-lg shadow-lg"/>
      <p>Features:</p>
      <ul>
        <li>Profile Management</li>
        <li>Post Creation and Management</li>
        <li>Comments and Likes</li>
      </ul>
    `,
    demoLink: "https://fast-api-social-app.onrender.com",
  },
  {
    id: 3,
    title: "Booking App",
    description: `
      <p>A hotel booking application allowing users to create accounts and list properties for booking.</p>
      <img src="src/assets/safa.png" alt="Blog App Screenshot" class="my-4 rounded-lg shadow-lg"/>
      <p>Features:</p>
      <ul>
        <li>User registration and authentication</li>
        <li>Hotel listings</li>
        <li>Responsive Design</li>
      </ul>
      <img src="src/assets/add.png" alt="Feature Screenshot" class="my-4 rounded-lg shadow-lg"/>
    `,
    demoLink: "https://vacation-app.onrender.com",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <div
                className="text-gray-600 mb-4"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
