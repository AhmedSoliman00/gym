import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Axios.get('http://localhost:8000/users', {
          withCredentials: true,
        })
        setUsers(response.data)
      } catch (error) {
        setError('Failed to fetch users.')
      }
    }

    fetchUsers()
  }, [])

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:8000/admin/profile/${id}`, {
        withCredentials: true,
      })
      setUsers(users.filter((user) => user._id !== id))
    } catch (error) {
      setError('Failed to delete user.')
    }
  }

  const handleUpdate = (id) => {
    navigate(`/user/${id}`)
  }

  return (
    <>
      <Nav />
      <section className='my-[5em] h-[80vh] flex flex-col justify-center items-center'>
        <h1 className='text-[#D6FD51] text-6xl text-center font-serif mb-8'>
          Admin Panel
        </h1>
        {error && <div className='text-red-500 mb-4'>{error}</div>}
        <div className='overflow-x-auto w-full max-w-4xl'>
          <table className='min-w-full bg-[#1C1C1C] text-white rounded-lg overflow-hidden'>
            <thead className='bg-[#303030]'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                  Username
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                  Email
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-[#1C1C1C] divide-y divide-gray-700'>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {user.username}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>{user.email}</td>
                  <td className='px-6 py-4 whitespace-nowrap flex space-x-4'>
                    <button
                      onClick={() => handleUpdate(user._id)}
                      className='bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700'
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className='bg-red-500 text-white p-2 rounded-full hover:bg-red-700'
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Admin
