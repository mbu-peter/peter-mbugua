import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: `
      <p>This is a full-featured ecommerce website built with React, Node.js, and MongoDB. It includes user authentication, product management, and a shopping cart.</p>
      <img src="https://via.placeholder.com/800x400" alt="Ecommerce Website Screenshot" class="my-4 rounded-lg shadow-lg"/>
      <p>Features:</p>
      <ul>
        <li>User Authentication</li>
        <li>Product Management</li>
        <li>Shopping Cart Integration</li>
      </ul>
      <img src="https://via.placeholder.com/800x400" alt="Feature Screenshot" class="my-4 rounded-lg shadow-lg"/>
      <p>Built with the following technologies:</p>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
    `,
    demoLink: "https://example.com/ecommerce-demo",
  },
  {
    id: 2,
    title: "Social Media API",
    description: `
      <p>This API allows interaction with a social media platform, including user profiles, posts, and comments.</p>
      <img src="https://via.placeholder.com/800x400" alt="Social Media API Screenshot" class="my-4 rounded-lg shadow-lg"/>
      <p>Features:</p>
      <ul>
        <li>Profile Management</li>
        <li>Post Creation and Management</li>
        <li>Comments and Likes</li>
      </ul>
    `,
    demoLink: "https://example.com/social-media-api-demo",
  },
  {
    id: 3,
    title: "Blog App",
    description: `
      <p>A simple blog application allowing users to write, edit, and comment on blog posts.</p>
      <img src="https://via.placeholder.com/800x400" alt="Blog App Screenshot" class="my-4 rounded-lg shadow-lg"/>
      <p>Features:</p>
      <ul>
        <li>Post Creation and Editing</li>
        <li>Comment Section</li>
        <li>Responsive Design</li>
      </ul>
      <img src="https://via.placeholder.com/800x400" alt="Feature Screenshot" class="my-4 rounded-lg shadow-lg"/>
    `,
    demoLink: "https://example.com/blog-app-demo",
  },
];

const SingleProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id.toString() === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">{project.title}</h1>
      <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
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
    </div>
  );
};

export default SingleProjectPage;
