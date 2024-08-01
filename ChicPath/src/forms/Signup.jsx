import React from 'react';

function Signup() {
  return (
    <div className="flex font-Inter items-center justify-center p-8">
      <form className="p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 flex items-center justify-center">Sign Up</h2>
          <input placeholder='Full Name' className="mb-4 mt-1 p-2 w-full border border-gray-300 rounded" type="text" name="username" />
          <input
            type="email"
            placeholder='example@gmail.com'
            required
            className="mb-4 mt-1 p-2 w-full border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder='password'
            required
            className="mb-4 mt-1 p-2 w-full border border-gray-300 rounded"
          />
        <button type="submit" className="w-full bg-emerald-200 p-2 rounded hover:bg-emerald-300">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;