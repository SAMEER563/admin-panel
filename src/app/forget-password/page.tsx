'use client';

import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // Basic validation
    if (!email) {
      setError('Email is required');
      return;
    }

    setIsSubmitting(true);

    // Simulate a password reset request (replace with an actual API call later)
    try {
      // Simulate the API request
      console.log('Password reset requested for:', email);
      setIsSubmitting(false);
      setMessage('Password reset link has been sent to your email!');
    } catch (err) {
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h2 className="text-2xl font-semibold text-center mb-4">Forgot Password</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {message && <div className="text-green-500 text-center mb-4">{message}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Reset Link...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
