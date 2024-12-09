import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';

function App() {
  const [activeForm, setActiveForm] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveForm('login')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeForm === 'login'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveForm('signup')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeForm === 'signup'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {activeForm === 'login' ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}

export default App;