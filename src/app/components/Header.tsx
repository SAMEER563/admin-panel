'use client';

import { useState, useRef, useEffect } from 'react';
import NotificationBell from './NotificationBell';

const Header = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New user registered', isRead: false },
    { id: 2, message: 'System maintenance scheduled for tomorrow', isRead: false },
    { id: 3, message: 'New comment on your post', isRead: true },
  ]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false); // For profile dropdown
  const [isDarkTheme, setIsDarkTheme] = useState(false); // For theme toggle
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // For language change
  const [searchQuery, setSearchQuery] = useState(''); // For search functionality

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null); // For profile dropdown

  const handleNotificationClick = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) &&
        (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node))
      ) {
        setIsDropdownVisible(false);
        setIsProfileDropdownVisible(false); // Close profile dropdown
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    console.log('Logged out');
    // Add your logout logic here
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    console.log('Language changed to:', lang);
  };

  return (
    <header className={`p-4 text-white ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-400'}`}>
      <div className="ml-20 flex justify-between items-center gap-4">
        <div className="text-xl font-semibold">LOGO</div>

        {/* Search Button */}
        <div className="relative">
          <input
            type="text"
            className="p-2 pl-10 rounded-full text-gray-700 bg-white"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            onClick={() => console.log('Search:', searchQuery)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM21 21l-4-4" />
            </svg>
          </button>
        </div>

        {/* Button Group: Move buttons to the right */}
        <div className="ml-auto flex gap-3 items-center">

          {/* Theme Change Button */}
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 bg-white hover:bg-gray-200">
            {isDarkTheme ? '🌞' : '🌙'}
          </button>

          {/* Language Change Button */}
          <div className="relative">
            <button
              onClick={() => handleLanguageChange(selectedLanguage === 'en' ? 'es' : 'en')}
              className="p-2 rounded-full text-gray-700 bg-white hover:bg-gray-200"
            >
              {selectedLanguage === 'en' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Notification Bell with Hover Details */}
          <div className="relative group">
            <NotificationBell onClick={() => setIsDropdownVisible(!isDropdownVisible)} />

            {/* Notification Details on Hover */}
            <div
              className="absolute right-0 top-10 bg-white shadow-xl rounded-lg border border-gray-200 w-80 p-4 hidden group-hover:block"
            >
              <ul className="max-h-60 overflow-y-auto">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className={`p-4 ${notification.isRead ? 'bg-gray-50' : 'bg-gray-100'} border-b hover:bg-gray-200 transition-colors duration-300`}
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-800">{notification.message}</p>
                      {!notification.isRead && <span className="text-xs text-blue-500 font-semibold">New</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Image and Dropdown */}
          <div className="relative">
            <button onClick={() => setIsProfileDropdownVisible(!isProfileDropdownVisible)}>
              <img
                src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </button>

            {/* Profile Dropdown */}
            {isProfileDropdownVisible && (
              <div
                ref={profileDropdownRef}
                className="absolute right-0 w-40 mt-2 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden"
              >
                <ul>
                  <li
                    className="p-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => console.log('Go to Profile')}
                  >
                    Profile
                  </li>
                  <li
                    className="p-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
