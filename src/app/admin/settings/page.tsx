'use client';

import GeneralSettingsForm from '@/app/components/GeneralSettingsForm';
import { useState } from 'react';

const SettingsPage = () => {
  // Dummy check for admin role (replace this with actual auth logic)
  const isAdmin = true;

  const [settings, setSettings] = useState({
    notifications: true,
    language: 'en',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    // Save settings (e.g., API call or local storage)
    console.log('Settings saved:', settings);
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      {isAdmin ? (
        <GeneralSettingsForm /> // Show General Settings for Admin
      ) : (
        <div className="space-y-4">
          {/* User Preferences Form */}
          <div>
            <label htmlFor="notifications" className="block text-lg">Enable Notifications</label>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="ml-2"
            />
          </div>

          <div>
            <label htmlFor="language" className="block text-lg">Language</label>
            <select
              id="language"
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="ml-2 p-2 border"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          <div className="mt-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Save Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
