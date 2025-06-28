import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      alert('Please fill all fields');
      return;
    }

    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }

    // ✅ Here you can call your backend API to register the user
    // Example: await axios.post('/api/register', { email, password })

    // Navigate to login on success
    navigate('/login');
  };

  return (
    <div className='bg-[#697565] flex flex-col h-3/5 w-[90%] md:w-1/3 justify-center align-middle mx-auto my-auto rounded-4xl shadow-2xl shadow-[#ECDFCC] text-[#ECDFCC]'>
      <p className='text-4xl font-extrabold mx-auto'>Sign Up</p>
      <p className='text-xl font-extrabold mx-auto'>Register to continue</p>
      <form className='flex flex-col my-10 mx-15' onSubmit={handleSignup}>
        <div className='flex flex-col'>
          <p className='text-2xl font-extrabold'>Email</p>
          <input
            className='border-2 border-[#ECDFCC] rounded-xl p-2'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <p className='text-2xl font-extrabold'>Password</p>
          <input
            className='border-2 border-[#ECDFCC] rounded-xl p-2'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <p className='text-2xl font-extrabold'>Confirm Password</p>
          <input
            className='border-2 border-[#ECDFCC] rounded-xl p-2'
            type='password'
            placeholder='Confirm Password'
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='w-3/5 h-15 bg-[#181C14]/70 hover:bg-[#181C14]/50 rounded-2xl p-3 font-bold text-2xl cursor-pointer mx-auto my-5'
        >
          Sign Up
        </button>
        <p className='text-center'>
          Already have an account?{' '}
          <Link to='/login' className='underline'>Login</Link>
        </p>
      </form>
    </div>
  );
}
