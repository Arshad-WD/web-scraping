import React, { useState } from 'react';
import { FaBell, FaCheck, FaTrash } from 'react-icons/fa'; // Icons for interactivity

const Message = () => {
  // Sample notifications (replace with dynamic data)
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New vulnerability found in OEM A', read: false },
    { id: 2, message: 'Critical update for OEM B', read: false },
    { id: 3, message: 'New vulnerability found in OEM C', read: false }
  ]);

  // Handle mark as read
  const handleMarkAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  // Handle delete notification
  const handleDelete = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id)
    );
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-32 bg-white rounded-lg shadow-lg animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Notification Center</h2>
        <FaBell className="text-blue-500 text-2xl" />
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No new notifications.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li
              key={notif.id}
              className={`p-4 border rounded-lg flex justify-between items-center transition-all duration-300 ease-in-out ${
                notif.read ? 'bg-gray-100' : 'bg-blue-50'
              }`}
            >
              <span
                className={`flex-1 ${
                  notif.read ? 'text-gray-500' : 'text-gray-800'
                }`}
              >
                {notif.message}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleMarkAsRead(notif.id)}
                  className="text-green-500 hover:text-green-700 transition-colors"
                  title="Mark as Read"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => handleDelete(notif.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Message;
