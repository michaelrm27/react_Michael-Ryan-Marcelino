import React from "react";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const dummyuser = {
      username: "admin",
      password: "password123",
    };

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      reset();
    } else if (
        username === dummyuser.username && 
        password === dummyuser.password) {
      localStorage.setItem("user", JSON.stringify(dummyuser));
      localStorage.setItem("isLoggedIn", true);
      reset();
    } else {
      setError("Invalid Username and Password");
    }
  };

  const reset = () => {
    setUsername("")
    setPassword("")
    setError("")
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg bg-slate-500 rounded border w-96 p-6">
        <p className="text-2xl font-semibold text-center">LOGIN</p>
        <div className="mt-3 flex justify-center">
          <form action="" onSubmit={handleLogin}>
            <label htmlFor="">Username</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Input Username"
              className="rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Input Password"
              className="rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="mt-3 flex justify-center">
              <button
                className="bg-blue-400 rounded p-1"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
