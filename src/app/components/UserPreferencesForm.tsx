// src/components/UserPreferencesForm.tsx
'use client';

import { useState } from 'react';

const UserPreferencesForm = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dummy state for dark mode
  const [emailNotifications, setEmailNotifications] = useState(true); // Dummy state for email notifications

  const handleDarkModeChange = () => setIsDarkMode(!isDarkMode);
  const handleEmailNotificationsChange = () => setEmailNotifications(!emailNotifications);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving preferences
    console.log('User Preferences:', { isDarkMode, emailNotifications });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">User Preferences</h3>

      <div>
        <label className="block text-gray-700">Theme</label>
        <div className="space-x-4">
          <button
            type="button"
            onClick={handleDarkModeChange}
            className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Dark Mode
          </button>
          <button
            type="button"
            onClick={handleDarkModeChange}
            className={`px-4 py-2 rounded-lg ${!isDarkMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Light Mode
          </button>
        </div>
      </div>

      <div>
        <label className="block text-gray-700">Email Notifications</label>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={handleEmailNotificationsChange}
            className={`px-4 py-2 rounded-lg ${emailNotifications ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            On
          </button>
          <button
            type="button"
            onClick={handleEmailNotificationsChange}
            className={`px-4 py-2 rounded-lg ${!emailNotifications ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Off
          </button>
        </div>
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Save Preferences
      </button>
    </form>
  );
};

export default UserPreferencesForm;
