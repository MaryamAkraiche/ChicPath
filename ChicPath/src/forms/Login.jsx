import React from 'react';

function Login() {
  return (
    <div>
      <form>
        <h2>Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full font-black p-2 rounded bg-blue-200 hover:bg-blue-300">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;