'use client';

import { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [systemNotifications, setSystemNotifications] = useState(true);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  const handleEmailNotificationsChange = () => {
    setEmailNotifications((prev) => !prev);
  };

  const handleSystemNotificationsChange = () => {
    setSystemNotifications((prev) => !prev);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">User Settings</h2>

      <div className="space-y-4">
        {/* Theme Setting */}
        <div>
          <label className="block text-lg font-medium">Theme</label>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="mt-2 p-2 border rounded-md w-full"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Email Notifications */}
        <div>
          <label className="block text-lg font-medium">Email Notifications</label>
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={handleEmailNotificationsChange}
              className="mr-2"
            />
            <span>Enable email notifications</span>
          </div>
        </div>

        {/* System Notifications */}
        <div>
          <label className="block text-lg font-medium">System Notifications</label>
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              checked={systemNotifications}
              onChange={handleSystemNotificationsChange}
              className="mr-2"
            />
            <span>Enable system notifications</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
