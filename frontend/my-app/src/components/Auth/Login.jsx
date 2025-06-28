import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
  e.preventDefault();

  // Trim spaces to avoid false positives
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  if (!trimmedEmail || !trimmedPassword) {
    alert("Please enter both email and password.");
    return;
  }

  // ✅ Temporary valid credentials
  const validEmail = "test@example.com";
  const validPassword = "123456";

  if (trimmedEmail === validEmail && trimmedPassword === validPassword) {
    localStorage.setItem("token", "fake-login-token");
    localStorage.setItem("user", JSON.stringify({ email: trimmedEmail }));
    navigate("/chat");
  } else {
    alert("Invalid email or password.");
  }
};


  return (
    <div className='bg-[#697565] flex flex-col h-3/5 w-[90%] md:w-1/3 justify-center align-middle mx-auto mt-20 rounded-4xl shadow-2xl shadow-[#ECDFCC] text-[#ECDFCC]'>
      <p className='text-4xl font-extrabold mx-auto '>Login</p>
      <p className='text-xl font-extrabold mx-auto'>Welcome back!!</p>
      <form className='flex flex-col my-10 mx-15' onSubmit={handleLogin}>
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
        <button
          type='submit'
          className='w-1/2 h-15 bg-[#181C14]/70 hover:bg-[#181C14]/50 rounded-2xl p-3 font-bold text-2xl cursor-pointer mx-auto my-5'
        >
          Login
        </button>
        <p>Don't have an account? <Link to={'/register'} className='underline'>Sign up</Link></p>
      </form>
    </div>
  );
}
