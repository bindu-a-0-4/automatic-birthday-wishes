import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Cake 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <Home size={20} /> },
    { path: '/contacts', name: 'Contacts', icon: <Users size={20} /> },
    { path: '/templates', name: 'Templates', icon: <FileText size={20} /> },
    { path: '/settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-md hidden md:flex flex-col h-screen">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Cake className="h-8 w-8 text-purple-600" />
          <h1 className="text-xl font-bold text-gray-800">BirthdayWisher</h1>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
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
          onClick={logout}
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md w-full transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;