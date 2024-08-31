const Navbar = () => {
  return (
    <>
      <div className="navbar container mx-auto">
        <div className="flex-1 text-3xl">
        <span className="text-green-700">&lt; </span>
          <span className="text-white">
            Pass<span className="text-green-700">/OP&gt; </span>
          </span>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <a href="https://github.com/Artreeus/React_password_manager" target="_blank">
                <img
                  alt="Tailwind CSS Navbar component"

                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                /></a>
              </div>
            </div>
          
          </div>
        </div>
      </div>


    </>
  );
};

export default Navbar;
