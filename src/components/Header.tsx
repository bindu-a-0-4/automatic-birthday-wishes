import React, { useState } from 'react';
import { Menu, Bell, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import MobileSidebar from './MobileSidebar';

const Header: React.FC = () => {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Today is John's birthday!" },
    { id: 2, message: "2 birthdays coming up this week" }
  ]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const dismissNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-4 z-10">
      <div className="flex-1 flex justify-between items-center">
        <button 
          className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </button>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 relative"
              onClick={toggleNotifications}
            >
              <Bell size={20} />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>
            
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-200 font-medium">Notifications</div>
                {notifications.length === 0 ? (
                  <div className="px-4 py-3 text-sm text-gray-500">No new notifications</div>
                ) : (
                  <div>
                    {notifications.map(notification => (
                      <div key={notification.id} className="px-4 py-3 flex justify-between items-start hover:bg-gray-50 border-b border-gray-100">
                        <span className="text-sm">{notification.message}</span>
                        <button 
                          onClick={() => dismissNotification(notification.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-purple-600 text-white flex items-center justify-center uppercase font-medium text-sm">
              {user?.name.charAt(0)}
            </div>
            <span className="text-sm font-medium text-gray-700 hidden sm:inline-block">
              {user?.name}
            </span>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && <MobileSidebar onClose={toggleMobileMenu} />}
    </header>
  );
};

export default Header;