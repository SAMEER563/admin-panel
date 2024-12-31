// src/pages/userManagement.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Icons for Edit and Delete
import { MdPersonAddAlt } from 'react-icons/md'; // Icon for Role Management button

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User' },
  ]);
  const [isAdmin] = useState(true); // Admin status, replace with actual logic

  const handleEditUser = (userId: number) => {
    // Handle user edit functionality here
    console.log('Editing user with id:', userId);
  };

  const handleDeleteUser = (userId: number) => {
    // Handle user deletion here
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleRoleManagement = () => {
    // Handle role management functionality here
    console.log('Opening role management');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      
      {/* User List */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-100"
          >
            <div className="flex items-center space-x-4">
              {/* User Details */}
              <div>
                <h3 className="text-lg font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
                <span className="text-sm text-gray-600">{user.role}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Edit and Delete Icons */}
              <button
                onClick={() => handleEditUser(user.id)}
                className="text-indigo-600 hover:text-indigo-800"
              >
                <FaEdit className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="text-red-600 hover:text-red-800"
              >
                <FaTrashAlt className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Role Management Button (Only visible for Admin) */}
      {isAdmin && (
        <div className="mt-6 text-center">
          <Link href="/admin/role-management">
          <button
            className="flex items-center justify-center mx-auto py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
          >
            <MdPersonAddAlt className="mr-2 w-5 h-5" />
            Manage Roles
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
