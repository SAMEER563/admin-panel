// src/components/GeneralSettingsForm.tsx
'use client';

import { useState } from 'react';

const GeneralSettingsForm = () => {
  const [siteTitle, setSiteTitle] = useState('Admin Panel'); // Dummy site title
  const [contactEmail, setContactEmail] = useState('admin@example.com'); // Dummy contact email

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving general settings
    console.log('General Settings:', { siteTitle, contactEmail });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">General Settings</h3>

      <div>
        <label htmlFor="siteTitle" className="block text-gray-700">Site Title</label>
        <input
          type="text"
          id="siteTitle"
          value={siteTitle}
          onChange={(e) => setSiteTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="contactEmail" className="block text-gray-700">Contact Email</label>
        <input
          type="email"
          id="contactEmail"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Save Settings
      </button>
    </form>
  );
};

export default GeneralSettingsForm;
