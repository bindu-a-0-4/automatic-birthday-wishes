import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cake, Send, Gift, CalendarClock, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Landing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-16">
          <div className="flex items-center justify-center md:justify-start">
            <Cake className="h-9 w-9 text-white" />
            <h1 className="text-2xl font-bold text-white ml-2">BirthdayWisher</h1>
          </div>
        </header>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Never Forget a Birthday <span className="text-yellow-300">Again!</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-xl mx-auto md:mx-0">
              Automatically send personalized birthday wishes to your friends and family via WhatsApp. Set it once and let the magic happen!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-xl mx-auto md:mx-0">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <Send className="h-7 w-7 text-yellow-300 mb-2 mx-auto md:mx-0" />
                <h3 className="text-lg font-semibold text-white">Automatic Sending</h3>
                <p className="text-purple-100 text-sm">Messages are sent automatically on the birthday date</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <Gift className="h-7 w-7 text-yellow-300 mb-2 mx-auto md:mx-0" />
                <h3 className="text-lg font-semibold text-white">Custom Templates</h3>
                <p className="text-purple-100 text-sm">Create beautiful personalized messages</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <CalendarClock className="h-7 w-7 text-yellow-300 mb-2 mx-auto md:mx-0" />
                <h3 className="text-lg font-semibold text-white">Never Miss a Date</h3>
                <p className="text-purple-100 text-sm">Reminders ensure you're always prepared</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <Sparkles className="h-7 w-7 text-yellow-300 mb-2 mx-auto md:mx-0" />
                <h3 className="text-lg font-semibold text-white">Simple Setup</h3>
                <p className="text-purple-100 text-sm">Connect with WhatsApp in just a few clicks</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="tabs flex">
                <button
                  className={`w-1/2 py-4 text-center font-medium ${
                    activeTab === 'login'
                      ? 'bg-purple-50 text-purple-700 border-b-2 border-purple-600'
                      : 'text-gray-600 bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('login')}
                >
                  Login
                </button>
                <button
                  className={`w-1/2 py-4 text-center font-medium ${
                    activeTab === 'signup'
                      ? 'bg-purple-50 text-purple-700 border-b-2 border-purple-600'
                      : 'text-gray-600 bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('signup')}
                >
                  Sign Up
                </button>
              </div>
              <div className="p-6">
                {activeTab === 'login' ? <LoginForm /> : <SignupForm onSwitch={() => setActiveTab('login')} />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 pb-8 text-center text-white text-sm text-opacity-70">
        <p>&copy; 2025 BirthdayWisher. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;