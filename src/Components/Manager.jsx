import React from "react";

const Manager = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* content */}

      <div className="mx-auto mycontainer px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          <span className="text-green-700">&lt; </span>
          <span className="text-white">
            Pass<span className="text-green-700">/OP&gt; </span>
          </span>
        </h1>
        <p className="text-green-900 text-base sm:text-lg md:text-xl text-center mt-2">
          Your Very Own Password Manager
        </p>

        {/* input fields */}

        <form className="flex flex-col p-4 text-black gap-6 sm:gap-8 items-center">
          <input
            className="rounded-full border border-green-500 w-full p-4 py-2 text-sm sm:text-base"
            type="text"
            id="website-url"
            placeholder="Enter website URL"
            aria-label="Enter website URL"
          />
          <div className="flex flex-col sm:flex-row w-full justify-between gap-6 sm:gap-8">
            <input
              className="rounded-full border border-green-500 w-full p-4 py-2 text-sm sm:text-base"
              type="text"
              id="website-username"
              placeholder="Enter Website Username"
              aria-label="Enter website username"
            />
            <input
              className="rounded-full border border-green-500 w-full p-4 py-2 text-sm sm:text-base"
              type="password"
              id="website-password"
              placeholder="Enter Website Password"
              aria-label="Enter website password"
            />
          </div>

          {/* password btn */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-500 rounded-full px-6 py-2 w-fit hover:bg-green-400 border border-green-900 text-sm sm:text-base"
            aria-label="Add Password"
          >
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
              colors="primary:#000,secondary:#000"
            ></lord-icon>
            Add Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Manager;
