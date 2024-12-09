import { useState } from 'react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });

  const handleToggleDarkMode = () => setDarkMode(!darkMode);
  const handleToggleNotification = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className={`space-y-2 mb-12 p-6 rounded-lg shadow-md
     ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* User Profile */}
      <div className="p-5 border-b border-gray-300">
        <h2 className="text-xl font-semibold">User Profile</h2>
        <div className="mt-4">
          <button className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-slate-600 duration-500">Edit Profile</button>
        </div>
      </div>

      {/* Theme */}
      <div className="p-5 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Theme</h2>
        <div className="mt-4 flex items-center space-x-4">
          <label>Light Mode</label>
          <input 
            type="checkbox" 
            checked={darkMode} 
            onChange={handleToggleDarkMode} 
            className="toggle-checkbox"
          />
          <label>Dark Mode</label>
        </div>
      </div>

      {/* Notifications */}
      <div className="p-5 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Notification Settings</h2>
        <div className="mt-4">
          <label className="block">
            <input 
              type="checkbox" 
              checked={notifications.email} 
              onChange={() => handleToggleNotification('email')}
              className="mr-2"
            />
            Email Notifications
          </label>
          <label className="block mt-2">
            <input 
              type="checkbox" 
              checked={notifications.sms} 
              onChange={() => handleToggleNotification('sms')}
              className="mr-2"
            />
            SMS Notifications
          </label>
          <label className="block mt-2">
            <input 
              type="checkbox" 
              checked={notifications.push} 
              onChange={() => handleToggleNotification('push')}
              className="mr-2"
            />
            Push Notifications
          </label>
        </div>
      </div>

      {/* Language Selector */}
      <div className="p-5 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Language</h2>
        <select className="mt-4 p-2 border rounded-lg">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>

      {/* Security Settings */}
      <div className="p-5 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Security</h2>
        <div className="mt-4">
          <button className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-slate-600 duration-500">Change Password</button>
        </div>
      </div>

      {/* Account Management */}
      <div className="p-5 border-gray-300">
        <h2 className="text-xl font-semibold">Account Management</h2>
        <div className="mt-4">
          <button className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-500 duration-500">Deactivate Account</button>
        </div>
      </div>
    </div>
  );
}
