'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiLogOut, FiUser, FiSettings, FiHome, FiChevronLeft } from 'react-icons/fi';
import { SlActionUndo } from 'react-icons/sl';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false); // State to track sidebar collapse

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleLogout = () => {
    console.log('Logged out');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-gray-400 text-black h-full p-6 flex flex-col justify-between transition-all duration-300`}
    >
      {/* Top Section */}
      <div>
       <div className="flex flex-row  mb-6">
       {!isCollapsed && <div className="text-2xl font-semibold mb-4">LOGO</div>}
           {/* Collapse Button */}
        <button
          className="mb-6 flex items-end justify-end w-full"
          onClick={toggleSidebar}
        >
          <SlActionUndo size={24} className="text-black" />
        </button>
       </div>

        {/* Admin Panel Text */}
        {!isCollapsed && <div className="text-2xl font-semibold mb-4">Admin Panel</div>}

        

        <ul className="space-y-4">
          {/* Dashboard */}
          <li>
            <button
              className="flex items-center justify-between w-full py-3  rounded-lg"
              onClick={() => toggleDropdown('dashboard')}
            >
              <div className="flex items-center">
                <FiHome size={20} className="mr-3" />
                {!isCollapsed && <span>Dashboard</span>}
              </div>
              {!isCollapsed && (
                <span
                  className={`transform transition-transform ${
                    openDropdown === 'dashboard' ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              )}
            </button>
            {!isCollapsed && openDropdown === 'dashboard' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link href="/admin/dashboard" className="block py-2 px-4 rounded-lg">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/admin/dashboard/analytics" className="block py-2 px-4 rounded-lg">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/admin/dashboard/reports" className="block py-2 px-4 rounded-lg">
                    Reports
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* User Management */}
          <li>
            <button
              className="flex items-center justify-between w-full py-3  rounded-lg"
              onClick={() => toggleDropdown('userManagement')}
            >
              <div className="flex items-center">
                <FiUser size={20} className="mr-3" />
                {!isCollapsed && <span>User Management</span>}
              </div>
              {!isCollapsed && (
                <span
                  className={`transform transition-transform ${
                    openDropdown === 'userManagement' ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              )}
            </button>
            {!isCollapsed && openDropdown === 'userManagement' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link href="/admin/users" className="block py-2 px-4 rounded-lg">
                    User List
                  </Link>
                </li>
                <li>
                  <Link href="/admin/role-management" className="block py-2 px-4 rounded-lg">
                    Roles
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Settings */}
          <li>
            <button
              className="flex items-center justify-between w-full py-3  rounded-lg"
              onClick={() => toggleDropdown('settings')}
            >
              <div className="flex items-center">
                <FiSettings size={20} className="mr-3" />
                {!isCollapsed && <span>Settings</span>}
              </div>
              {!isCollapsed && (
                <span
                  className={`transform transition-transform ${
                    openDropdown === 'settings' ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              )}
            </button>
            {!isCollapsed && openDropdown === 'settings' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link href="/admin/settings/profile" className="block py-2 px-4 rounded-lg">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/admin/settings/security" className="block py-2 px-4 rounded-lg">
                    Security
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="flex items-center w-full py-3  rounded-lg"
        >
          <FiLogOut className="mr-3 text-xl" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
