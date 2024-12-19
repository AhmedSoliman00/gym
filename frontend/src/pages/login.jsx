import React, { useState ,useContext} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

const Login = () => {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/home');
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <section className="h-[100vh] login flex justify-center items-center bg-[#1C1C1C] m-0 ">
      <div className="w-full h-full rounded-xl flex justify-center items-center tracking-widest">
        <form onSubmit={handleLogin} className="space-y-6">
          <h1 className="text-[#D6FD51] text-5xl text-center">
            Everest Gym
          </h1>

          {error && <div className="text-white text-center mb-4">{error}</div>}
          <div className="input-group">
          <input
            className="input w-80"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="user-label">Email</label>
          </div>
            
          <div className="input-group">
          <input
            className="input w-80"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            />
            <label className="user-label">Password</label>
            </div>

          <button
            type="submit"
            className="btn-submit text-white w-full h-[2.5em] bg-[#6c6968] rounded-xl text-2xl hover:bg-[#D6FD51] hover:text-black hover:shadow-2xl shadow shadow-white"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-lg tracking-widest">
            Don't have an account?{" "}
            <a
              className="text-[#D6FD51] hover:text-[#93a752] duration-300 delay-75"
              href="./signup"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
      <div className="loginandSign-photo max-md:hidden"><div className="running-line"></div></div>
    </section>
  );
};

export default Login;
