const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-6">
            Follow me on social media and stay updated with my latest projects
            and news.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mbu-peter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/mbugua_is_me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400"
            >
              Twitter
            </a>
          </div>
          <p className="text-lg mb-6">
            © {new Date().getFullYear()} Peter Mbugua. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
