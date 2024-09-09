import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Updated hook

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your authentication logic here
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    // Clear error if validation passes
    setError('');
    
    // Example: Log the credentials (Replace with actual authentication)
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect or handle successful login
    navigate('/dashboard'); // Updated redirection
  };

  const handleSignupRedirect = () => {
    navigate('/signup'); // Updated redirection
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        
        {/* Error Message */}
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 text-lg" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 text-lg" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account? 
            <button 
              onClick={handleSignupRedirect}
              className="text-blue-500 hover:underline ml-1"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
