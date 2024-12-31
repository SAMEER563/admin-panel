// src/components/NotificationBell.tsx
'use client';

import { useState, useRef, useEffect } from 'react';

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New user registered', isNew: true },
    { id: 2, message: 'Server maintenance scheduled', isNew: false },
    { id: 3, message: 'Role updated for user', isNew: false },
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCreateNotification = () => {
    // Add a new notification to the list (you can customize this behavior as needed)
    const newNotification = {
      id: notifications.length + 1,
      message: 'New notification created',
      isNew: true,
    };
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div className="relative">
      {/* Notification Bell Icon */}
      <button
        onClick={toggleDropdown}
        className="relative text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 h-10 text-white bg-indigo-600 p-2 rounded-full shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-110"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.403 1.403a2 2 0 01-1.41.597H5.814a2 2 0 01-1.41-.597L4 17h5m6-4V7a6 6 0 10-12 0v6H5l1 7h12l1-7h-3z"
          />
        </svg>

        {/* Unread Notification Indicator */}
        {notifications.some((notif) => notif.isNew) && (
          <span className="absolute top-0 right-0 block w-3 h-3 rounded-full bg-red-600"></span>
        )}
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
        >
          <ul className="space-y-2 p-4">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`p-3 rounded-lg ${notif.isNew ? 'bg-blue-100' : 'bg-white'} hover:bg-gray-100 transition-colors`}
              >
                <p className="text-sm text-gray-700">{notif.message}</p>
              </li>
            ))}
          </ul>
          {/* Create Notification Button */}
          <div className="p-3 mt-2 border-t border-gray-200">
            <button
              onClick={handleCreateNotification}
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
            >
              Create Notification
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
