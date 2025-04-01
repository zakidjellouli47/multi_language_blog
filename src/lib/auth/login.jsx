import React, { useState } from 'react';

const ScoutAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Reset form data when switching between login and registration
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with cute scout illustration */}
        <div className="bg-green-500 p-6 text-center">
          <div className="mx-auto w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center mb-2">
            {/* Simple scout face */}
            <div className="relative">
              <div className="w-16 h-16 bg-yellow-300 rounded-full border-2 border-yellow-400">
                {/* Eyes */}
                <div className="absolute top-4 left-3 w-2 h-3 bg-gray-800 rounded-full"></div>
                <div className="absolute top-4 right-3 w-2 h-3 bg-gray-800 rounded-full"></div>
                {/* Smile */}
                <div className="absolute bottom-4 left-4 w-8 h-4 border-b-2 border-gray-800 rounded-full"></div>
              </div>
              {/* Scout hat */}
              <div className="absolute -top-3 left-1 w-14 h-4 bg-green-700 rounded"></div>
            </div>
          </div>
          <h1 className="text-white text-2xl font-bold">Scout Adventures</h1>
          <p className="text-green-100 text-sm">Explore, Learn, Grow!</p>
        </div>

        {/* Form Container */}
        <div className="p-6">
          <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
            {isLogin ? 'Welcome back, Scout!' : 'Join our Scout Troop!'}
          </h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                  Scout Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Your scout name"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {!isLogin && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 mb-4 flex items-center justify-center"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={toggleForm}
                className="text-green-600 hover:text-green-800 text-sm font-medium"
              >
                {isLogin ? "Don't have an account? Join now!" : "Already a scout? Log in!"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-green-100 px-6 py-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-green-800">© 2025 Scout Adventures</span>
            <div className="space-x-2">
              <a href="#" className="text-xs text-green-800 hover:underline">Help</a>
              <a href="#" className="text-xs text-green-800 hover:underline">Privacy</a>
              <a href="#" className="text-xs text-green-800 hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutAuth;