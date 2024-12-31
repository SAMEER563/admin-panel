'use client';

import { useState } from 'react';

const RoleManagement = () => {
  // Dummy data for users
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', roles: ['Admin'], isActive: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', roles: ['User'], isActive: true },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', roles: ['User'], isActive: false },
  ]);

  const [selectedRoles, setSelectedRoles] = useState<string[]>(['User']);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleRoleChange = (userId: number, newRoles: string[]) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, roles: newRoles } : user
      )
    );
  };

  const toggleUserActivation = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Role Management</h2>

      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div>
                <button
                  onClick={() => toggleUserActivation(user.id)}
                  className={`py-2 px-4 rounded-lg ${
                    user.isActive ? 'bg-green-500' : 'bg-red-500'
                  } text-white`}
                >
                  {user.isActive ? 'Deactivate' : 'Activate'}
                </button>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Roles:</p>
              <select
                multiple
                value={user.roles}
                onChange={(e) =>
                  handleRoleChange(user.id, Array.from(e.target.selectedOptions, (option) => option.value))
                }
                className="w-full mt-2 p-2 border rounded-lg"
              >
                {['Admin', 'User', 'Manager', 'Editor'].map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleManagement;
