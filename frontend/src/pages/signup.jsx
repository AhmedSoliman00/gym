import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await Axios.post("http://localhost:8000/signup", {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        // Redirect to login after successful sign up
        navigate("/login");
      }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <section className="h-[100vh] sign bg-[#1C1C1C] m-0">
      <div className="w-full h-full flex justify-center items-center tracking-widest">
        <form className="space-y-6 " onSubmit={handleSubmit}>
          <h1 className="text-[#D6FD51] text-5xl text-center">
            Sign In Everset
          </h1>

          {error && (
            <div className="text-red-600 text-center mb-4">{error}</div>
          )}
          <div className="input-group">
            <input
            className="input w-full"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <label className="user-label">UserName</label>
          </div>


          <div className="input-group">
            <input
              className="input w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="user-label">Email</label>
          </div>

          <div className="input-group">
            <input
              className="input w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="user-label">Password</label>
          </div>

          <div className="input-group">
            <input
              className="input w-full"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label className="user-label">Confirm Password</label>
          </div>
          {/* Button */}
          <button
            type="submit"
            className="btn-submit text-white w-full h-[2.5em] bg-[#6c6968] rounded-xl text-2xl hover:shadow-2xl shadow shadow-white hover:bg-[#D6FD51] hover:text-black"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="text-center text-lg tracking-widest">
            Already have an account?{" "}
            <a
              className="text-[#D6FD51] hover:text-[#93a752] duration-300 delay-75"
              href="./login"
            >
              Login
            </a>
          </p>
        </form>
      </div>
      <div className="loginandSign-photo"><div className="running-line"></div></div>
    </section>
  );
};

export default SignUp;
