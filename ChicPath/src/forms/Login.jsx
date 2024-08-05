import React from 'react';

function Login() {
  return (
    <div>
      <div className="flex font-inter items-center justify-center p-8">
        <form className="p-6 rounded shadow-md w-80">
          <h2 className="text-2xl mb-4 flex items-center justify-center">Login</h2>
            <input
              placeholder='Example@gmail.com'
              type="email"
              required
              className="mb-4 mt-1 p-2 w-full border border-gray-300 rounded"
            />
            <input
              placeholder='Password'
              type="password"
              required
              className="mb-4 mt-1 p-2 w-full border border-gray-300 rounded"
            />
          <button type="submit" className="w-full bg-emerald-200 p-2 rounded hover:bg-emerald-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;