import React from 'react';
import { format, differenceInDays } from 'date-fns';
import { Bell, Users, MessageCircle, Calendar, ChevronRight, Gift } from 'lucide-react';
import { mockContacts } from '../data/mockData';

const Dashboard: React.FC = () => {
  // Sort contacts by upcoming birthday
  const today = new Date();
  const upcomingBirthdays = [...mockContacts]
    .map(contact => {
      // Convert to this year's birthday
      const thisYearsBirthday = new Date(contact.birthday);
      thisYearsBirthday.setFullYear(today.getFullYear());
      
      // If birthday has passed, set to next year
      if (thisYearsBirthday < today) {
        thisYearsBirthday.setFullYear(today.getFullYear() + 1);
      }
      
      const daysUntil = differenceInDays(thisYearsBirthday, today);
      
      return {
        ...contact,
        daysUntil,
        thisYearsBirthday
      };
    })
    .sort((a, b) => a.daysUntil - b.daysUntil)
    .slice(0, 5);

  const todaysBirthdays = upcomingBirthdays.filter(contact => contact.daysUntil === 0);
  
  // Stats data
  const stats = [
    { title: 'Total Contacts', value: mockContacts.length, icon: <Users className="h-6 w-6 text-blue-500" /> },
    { title: 'Messages Sent', value: 147, icon: <MessageCircle className="h-6 w-6 text-green-500" /> },
    { title: 'Upcoming Birthdays', value: upcomingBirthdays.length, icon: <Calendar className="h-6 w-6 text-purple-500" /> },
    { title: 'Messages Scheduled', value: 12, icon: <Bell className="h-6 w-6 text-orange-500" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening.</p>
      </div>

      {todaysBirthdays.length > 0 && (
        <div className="mb-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-6 text-white shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2 flex items-center">
                <Gift className="h-6 w-6 mr-2" />
                Today's Birthdays
              </h2>
              <p className="opacity-90">
                {todaysBirthdays.length === 1 
                  ? `It's ${todaysBirthdays[0].name}'s birthday today!` 
                  : `${todaysBirthdays.length} birthdays today!`}
              </p>
            </div>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors px-4 py-2 rounded-md text-sm font-medium backdrop-blur-sm">
              Send Wishes
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {todaysBirthdays.map(contact => (
              <div key={contact.id} className="bg-white bg-opacity-10 rounded-md p-3 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-purple-300 flex items-center justify-center text-purple-800 font-semibold text-lg">
                      {contact.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-medium">{contact.name}</h3>
                      <p className="text-sm opacity-80">{contact.phone}</p>
                    </div>
                  </div>
                  <button className="bg-purple-800 hover:bg-purple-900 text-white text-sm py-1 px-3 rounded transition-colors">
                    Send now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">{stat.title}</h3>
              <div className="p-2 bg-gray-50 rounded-md">{stat.icon}</div>
            </div>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Upcoming Birthdays</h2>
            <a 
              href="/contacts" 
              className="text-sm text-purple-600 hover:text-purple-800 flex items-center"
            >
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="space-y-4">
            {upcomingBirthdays.map(contact => (
              <div 
                key={contact.id} 
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold">
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{contact.name}</h3>
                    <p className="text-sm text-gray-500">
                      {format(new Date(contact.birthday), 'MMMM d')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    contact.daysUntil === 0 
                      ? 'bg-green-100 text-green-800' 
                      : contact.daysUntil <= 7 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-blue-100 text-blue-800'
                  }`}>
                    {contact.daysUntil === 0 
                      ? 'Today' 
                      : contact.daysUntil === 1 
                        ? 'Tomorrow' 
                        : `${contact.daysUntil} days`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
            <a 
              href="#" 
              className="text-sm text-purple-600 hover:text-purple-800 flex items-center"
            >
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-green-500 pl-4 py-1">
              <p className="font-medium text-gray-800">Birthday wish sent to John Doe</p>
              <p className="text-sm text-gray-500">Today, 9:42 AM</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4 py-1">
              <p className="font-medium text-gray-800">New contact added: Sarah Smith</p>
              <p className="text-sm text-gray-500">Yesterday, 2:30 PM</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-4 py-1">
              <p className="font-medium text-gray-800">New template created: "Birthday Greetings"</p>
              <p className="text-sm text-gray-500">Jun 10, 5:15 PM</p>
            </div>
            <div className="border-l-2 border-orange-500 pl-4 py-1">
              <p className="font-medium text-gray-800">Message scheduled for Michael Johnson</p>
              <p className="text-sm text-gray-500">Jun 9, 11:20 AM</p>
            </div>
            <div className="border-l-2 border-red-500 pl-4 py-1">
              <p className="font-medium text-gray-800">WhatsApp connection updated</p>
              <p className="text-sm text-gray-500">Jun 7, 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;