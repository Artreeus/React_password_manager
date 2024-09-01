import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  // State to manage form data
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordArray, setPasswordArray] = useState([]);

  // Load passwords from localStorage when the component mounts
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Copy text function
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Text Copied To Clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Function to handle form submission
  const savePassword = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Add the new password to the existing array and save to localStorage
    const updatedPasswords = [...passwordArray, { ...form, id: uuidv4() }];
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

    // Reset the form fields
    setForm({ site: "", username: "", password: "" });
  };

  // delete password function

  const deletePassword = (id) => {
    console.log("Deleting Password with id ", id);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    localStorage.setItem(
      "passwords",
      JSON.stringify(passwordArray.filter((item) => item.id !== id))
    );
  };

  // delete password function

  const editPassword = (id) => {
    console.log("Editing Password with id ", id);
    
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* content */}
      <div className="mx-auto mycontainer px-4 sm:px-8 lg:px-16">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            <span className="text-green-700">&lt; </span>
            <span className="text-white">
              Pass<span className="text-green-700">/OP&gt; </span>
            </span>
          </h1>
          <p className="text-green-900 text-base sm:text-lg md:text-xl text-center mt-2">
            Your Very Own Password Manager
          </p>
        </div>

        {/* input fields */}
        <form
          onSubmit={savePassword}
          className="flex flex-col p-4 text-black gap-6 sm:gap-8 items-center"
        >
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-500 w-full p-4 py-2 text-sm sm:text-base"
            type="text"
            name="site"
            id="website-url"
            placeholder="Enter website URL"
            aria-label="Enter website URL"
          />
          <div className="flex flex-col sm:flex-row w-full justify-between gap-6 sm:gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-green-500 w-full p-4 py-2 text-sm sm:text-base"
              type="text"
              id="website-username"
              placeholder="Enter Website Username"
              aria-label="Enter website username"
              name="username"
            />
            <div className="w-full flex items-center">
              <input
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-green-500 w-full p-4 py-2 text-sm sm:text-base"
                type={showPassword ? "text" : "password"}
                id="website-password"
                placeholder="Enter Website Password"
                aria-label="Enter website password"
                name="password"
              />
              <lord-icon
                src="https://cdn.lordicon.com/vfczflna.json"
                trigger="hover"
                colors="primary:#000,secondary:#0000"
                style={{ width: "30px", height: "30px", margin: "-40px" }}
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
              ></lord-icon>
            </div>
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
            Save Password
          </button>
        </form>

        {/* password table */}
        <div className="passwords mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">My Passwords :</h2>
          <table className="table-auto w-full bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <thead className="text-white">
              <tr>
                <th className="p-4 border-b border-gray-600">Website</th>
                <th className="p-4 border-b border-gray-600">Username</th>
                <th className="p-4 border-b border-gray-600">Password</th>
                <th className="p-4 border-b border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.length > 0 ? (
                passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="p-4 border-b border-gray-600 text-white">
                      <div className="flex items-center justify-center gap-2">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.site}
                        </a>
                        <div
                          className="cursor-pointer"
                          onClick={() => copyText(item.site)}
                        >
                          <lord-icon
                            style={{
                              width: "20px",
                              height: "20px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/fyxgoiep.json"
                            trigger="hover"
                            colors="primary:#fff,secondary:#fff"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-600 text-white  gap-2">
                      <div className="flex items-center justify-center gap-2">
                        <span>{item.username}</span>
                        <div
                          className="cursor-pointer"
                          onClick={() => copyText(item.username)}
                        >
                          <lord-icon
                            style={{
                              width: "20px",
                              height: "20px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/fyxgoiep.json"
                            trigger="hover"
                            colors="primary:#fff,secondary:#fff"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-600 text-white text-center gap-2">
                      <div className="flex items-center justify-center gap-2">
                        <span>{item.password}</span>
                        <div
                          className="cursor-pointer"
                          onClick={() => copyText(item.password)}
                        >
                          <lord-icon
                            style={{
                              width: "20px",
                              height: "20px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/fyxgoiep.json"
                            trigger="hover"
                            colors="primary:#fff,secondary:#fff"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-600 text-white text-center gap-2">
                      <div className="flex items-center justify-center gap-2">
                        <span
                          className="cursor-pointer mx-2 "
                          onClick={() => editPassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/wuvorxbv.json"
                            trigger="hover"
                            stroke="light"
                            colors="primary:#fff,secondary:#fff"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-2"
                          onClick={() => deletePassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/drxwpfop.json"
                            trigger="hover"
                            stroke="light"
                            colors="primary:#fff,secondary:#fff"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No passwords saved
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manager;
