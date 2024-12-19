import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import Nav from '../components/nav'
import Footer from '../components/footer'

const UpdateUser = () => {
  const { id } = useParams()
  const { user, setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const endpoint = user.isAdmin
          ? `http://localhost:8000/admin/profile/${id}`
          : `http://localhost:8000/profile/${id}`
        const response = await Axios.get(endpoint, {
          withCredentials: true,
        })
        setUsername(response.data.username)
        setEmail(response.data.email)
      } catch (error) {
        setError('Failed to fetch user data.')
      }
    }

    fetchUserData()
  }, [id, user.isAdmin])

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
  
    try {
      const endpoint = user.isAdmin
        ? `http://localhost:8000/admin/profile/${id}`
        : `http://localhost:8000/profile/${id}`;
      const response = await Axios.put(
        endpoint,
        { username, email, password },
        { withCredentials: true }
      );
  
      // Only update the user context if the current user is the one being updated
      if (user._id === id) {
        setUser(response.data);
      }
  
      setLoading(false);
      setSuccess('Profile updated successfully');
      navigate('/home');
    } catch (error) {
      setLoading(false);
      setError('Failed to update profile. Please try again.');
    }
  };

  return (
    <>
      <Nav />
      <section className='h-[calc(100vh-64px)] flex flex-col justify-center items-center bg-[#1C1C1C] m-0'>
        <div className='w-full max-w-md rounded-xl flex flex-col justify-center items-center tracking-widest'>
          <form onSubmit={handleUpdate} className='space-y-6 w-full'>
            <h1 className='text-[#D6FD51] text-5xl text-center'>
              Update Profile
            </h1>

            {error && (
              <div className='text-white text-center mb-4'>{error}</div>
            )}
            {success && (
              <div className='text-white text-center mb-4'>{success}</div>
            )}

            <div className='input-group'>
              <input
                className='input w-full'
                type='text'
                value={username}
                defaultValue={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className='user-label'>Username</label>
            </div>

            <div className='input-group'>
              <input
                className='input w-full'
                type='email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className='user-label'>Email</label>
            </div>

            <div className='input-group'>
              <input
                className='input w-full'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className='user-label'>Password</label>
            </div>

            <button
              type='submit'
              className='btn-submit text-white w-full h-[2.5em] bg-[#6c6968] rounded-xl text-2xl hover:bg-[#D6FD51] hover:text-black hover:shadow-2xl shadow shadow-white'
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Profile'}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default UpdateUser
