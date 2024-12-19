import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/auth";

const Nav = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const role = user.isAdmin
  console.log(role)
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className='fixed w-full z-10 bg-[#303030] top-0 pb-2'>
      <h1 className='text-3xl hover: cursor-pointer'>Everest GYM</h1>
      <ul className=''>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/bmr">Bmr</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        {role && (
          <li>
          <Link to="/admin">Admin</Link>
        </li>
        )}
      </ul>
      <div className='space-x-8'>
        <button className='btn'>
          <Link className='' to={`/user/${user ? user._id : ''}`}>
            {user ? user.username : 'Profile'}
          </Link>
        </button>
        <button
          onClick={handleLogout}
          className='logout rounded-md bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-7'
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;