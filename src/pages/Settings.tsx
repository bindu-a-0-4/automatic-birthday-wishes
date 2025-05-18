import React, { useState } from 'react';
import { Smartphone, Bell, Shield, UserCog, Clock } from 'lucide-react';

const Settings: React.FC = () => {
  const [whatsAppConnected, setWhatsAppConnected] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    browser: true,
    reminderTime: '9:00',
    reminderDays: 1
  });
  const [scheduleSettings, setScheduleSettings] = useState({
    sendTime: '9:00',
    timeZone: 'America/New_York'
  });

  const handleConnectWhatsApp = () => {
    // In a real app, this would initiate WhatsApp connection flow
    setWhatsAppConnected(true);
  };

  const handleDisconnectWhatsApp = () => {
    // In a real app, this would disconnect WhatsApp
    setWhatsAppConnected(false);
  };

  const handleNotificationChange = (field: string, value: boolean | string | number) => {
    setNotificationSettings({ ...notificationSettings, [field]: value });
  };

  const handleScheduleChange = (field: string, value: string) => {
    setScheduleSettings({ ...scheduleSettings, [field]: value });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Manage your account and application preferences</p>
      </div>

      <div className="space-y-6">
        {/* WhatsApp Connection */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <Smartphone className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">WhatsApp Connection</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-600">
                Connect your WhatsApp account to send birthday wishes automatically.
              </p>
            </div>
            {whatsAppConnected ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="bg-green-100 p-2 rounded-full">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-3 text-green-600 font-medium">Connected to WhatsApp</span>
                </div>
                <button
                  onClick={handleDisconnectWhatsApp}
                  className="bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition-colors"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="bg-red-100 p-2 rounded-full">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  </div>
                  <span className="ml-3 text-red-600 font-medium">Not connected to WhatsApp</span>
                </div>
                <button
                  onClick={handleConnectWhatsApp}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Connect WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">Notification Settings</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium text-gray-800">Email Notifications</h3>
                <p className="text-sm text-gray-500">Receive birthday reminders via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notificationSettings.email}
                  onChange={(e) => handleNotificationChange('email', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium text-gray-800">Browser Notifications</h3>
                <p className="text-sm text-gray-500">Receive birthday reminders in your browser</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notificationSettings.browser}
                  onChange={(e) => handleNotificationChange('browser', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-medium text-gray-800 mb-2">Reminder Time</h3>
                <p className="text-sm text-gray-500 mb-3">When to send birthday reminders</p>
                <input 
                  type="time" 
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  value={notificationSettings.reminderTime}
                  onChange={(e) => handleNotificationChange('reminderTime', e.target.value)}
                />
              </div>
              
              <div>
                <h3 className="text-base font-medium text-gray-800 mb-2">Days in Advance</h3>
                <p className="text-sm text-gray-500 mb-3">How many days before to remind you</p>
                <select 
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  value={notificationSettings.reminderDays}
                  onChange={(e) => handleNotificationChange('reminderDays', parseInt(e.target.value))}
                >
                  <option value="0">On the same day</option>
                  <option value="1">1 day before</option>
                  <option value="2">2 days before</option>
                  <option value="3">3 days before</option>
                  <option value="7">1 week before</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Message Scheduling */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">Message Scheduling</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-medium text-gray-800 mb-2">Default Send Time</h3>
                <p className="text-sm text-gray-500 mb-3">When to send birthday wishes by default</p>
                <input 
                  type="time" 
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  value={scheduleSettings.sendTime}
                  onChange={(e) => handleScheduleChange('sendTime', e.target.value)}
                />
              </div>
              
              <div>
                <h3 className="text-base font-medium text-gray-800 mb-2">Time Zone</h3>
                <p className="text-sm text-gray-500 mb-3">Your local time zone for scheduling</p>
                <select 
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  value={scheduleSettings.timeZone}
                  onChange={(e) => handleScheduleChange('timeZone', e.target.value)}
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="Europe/London">London (GMT)</option>
                  <option value="Europe/Paris">Central European Time (CET)</option>
                  <option value="Asia/Tokyo">Japan Time (JST)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <UserCog className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">Account Settings</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-100">
              <div className="mb-4 md:mb-0">
                <h3 className="text-base font-medium text-gray-800">Email Address</h3>
                <p className="text-sm text-gray-500">demo@example.com</p>
              </div>
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                Change Email
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-100">
              <div className="mb-4 md:mb-0">
                <h3 className="text-base font-medium text-gray-800">Password</h3>
                <p className="text-sm text-gray-500">Last changed 3 months ago</p>
              </div>
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                Change Password
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-base font-medium text-gray-800">Delete Account</h3>
                <p className="text-sm text-gray-500">This action cannot be undone</p>
              </div>
              <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">Privacy & Security</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-base font-medium text-gray-800">Data Usage</h3>
                <p className="text-sm text-gray-500">Allow anonymous usage data collection</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium text-gray-800">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;