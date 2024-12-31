// src/components/NotificationForm.tsx
'use client';

import { useState } from 'react';

const NotificationForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate adding a new notification
    console.log('New Notification:', message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Create Notification</h3>
      <div>
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows={4}
          placeholder="Enter notification message"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Create Notification
      </button>
    </form>
  );
};

export default NotificationForm;
