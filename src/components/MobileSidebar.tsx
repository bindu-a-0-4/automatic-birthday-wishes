import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Home, Users, FileText, Settings, LogOut, Cake } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface MobileSidebarProps {
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ onClose }) => {
  const { logout } = useAuth();

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <Home size={20} /> },
    { path: '/contacts', name: 'Contacts', icon: <Users size={20} /> },
    { path: '/templates', name: 'Templates', icon: <FileText size={20} /> },
    { path: '/settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 md:hidden">
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl flex flex-col h-full">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cake className="h-7 w-7 text-purple-600" />
            <h1 className="text-xl font-bold text-gray-800">BirthdayWisher</h1>
          </div>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors ${
                      isActive ? 'bg-purple-50 text-purple-700 border-r-4 border-purple-600' : ''
                    }`
                  }
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md w-full transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;