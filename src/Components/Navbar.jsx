const Navbar = () => {
  return (
    <div className="navbar flex justify-center text-white my-7">
      <div className="relative p-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl transition-all duration-400 ease-in-out ">
        <button className="text-3xl py-2 px-3 rounded-lg border-none  text-white cursor-pointer shadow-md">
          Password Manager
        </button>
      </div>
    </div>
  );
};

export default Navbar;
