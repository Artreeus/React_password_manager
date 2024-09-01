const Navbar = () => {
  return (
    <div className="navbar container mx-auto flex items-center justify-between mt-4 py-4 px-6 bg-gray-800 text-white rounded-3xl">
      <div className="flex-1 text-3xl">
        <span className="text-green-700">&lt; </span>
        <span className="text-white">
          Pass<span className="text-green-700">/OP&gt; </span>
        </span>
      </div>
      <div className="flex-none flex items-center gap-2">
        <a
          href="https://github.com/Artreeus/React_password_manager"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <img
            alt="GitHub Logo"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            className="w-8 h-8 rounded-full" // Adjust size as needed
          />
          <span className="text-white font-medium">GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
