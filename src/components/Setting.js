import React, { useState } from 'react';

const initialEmailSettings = {
  emailAddresses: ['user@example.com'],
  notifications: {
    OEM1: true,
    OEM2: false,
    severityLevels: {
      critical: true,
      high: false,
      moderate: true,
    },
  },
  frequency: 'daily',
  customization: ['OEM1', 'OEM2'],
};

const Setting = () => {
  const [emailSettings, setEmailSettings] = useState(initialEmailSettings);

  const handleEmailChange = (e, index) => {
    const newEmails = [...emailSettings.emailAddresses];
    newEmails[index] = e.target.value;
    setEmailSettings({ ...emailSettings, emailAddresses: newEmails });
  };

  const handleNotificationToggle = (e) => {
    const { name, checked } = e.target;
    setEmailSettings({
      ...emailSettings,
      notifications: { ...emailSettings.notifications, [name]: checked },
    });
  };

  const handleSeverityToggle = (e) => {
    const { name, checked } = e.target;
    setEmailSettings({
      ...emailSettings,
      notifications: {
        ...emailSettings.notifications,
        severityLevels: { ...emailSettings.notifications.severityLevels, [name]: checked },
      },
    });
  };

  const handleFrequencyChange = (e) => {
    setEmailSettings({ ...emailSettings, frequency: e.target.value });
  };

  const handleCustomizationChange = (e) => {
    const { value, checked } = e.target;
    const newCustomization = checked
      ? [...emailSettings.customization, value]
      : emailSettings.customization.filter((item) => item !== value);
    setEmailSettings({ ...emailSettings, customization: newCustomization });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Email Subscription Management</h1>

      {/* Email Addresses Management */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Email Addresses</h2>
        {emailSettings.emailAddresses.map((email, index) => (
          <div key={index} className="mb-4 flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e, index)}
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Email Address"
            />
          </div>
        ))}
      </div>

      {/* Notification Preferences */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">OEMs</h3>
          {Object.keys(emailSettings.notifications).filter(key => key !== 'severityLevels').map((oem, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                name={oem}
                checked={emailSettings.notifications[oem]}
                onChange={handleNotificationToggle}
                className="mr-2"
              />
              <label>{oem}</label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Severity Levels</h3>
          {Object.keys(emailSettings.notifications.severityLevels).map((level, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                name={level}
                checked={emailSettings.notifications.severityLevels[level]}
                onChange={handleSeverityToggle}
                className="mr-2"
              />
              <label>{level.charAt(0).toUpperCase() + level.slice(1)}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Page */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>

        {/* Frequency Settings */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Frequency of Checks</h3>
          <select
            value={emailSettings.frequency}
            onChange={handleFrequencyChange}
            className="p-2 border border-gray-300 rounded-lg w-full"
          >
            <option value="real-time">Real-Time</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        {/* Customization Options */}
        <div>
          <h3 className="text-xl font-semibold">Customization Options</h3>
          {['OEM1', 'OEM2', 'OEM3'].map((oem) => (
            <div key={oem} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={oem}
                checked={emailSettings.customization.includes(oem)}
                onChange={handleCustomizationChange}
                className="mr-2"
              />
              <label>{oem}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setting;
