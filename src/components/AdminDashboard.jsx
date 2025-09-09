import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Overview from './dashboard/Overview';
import Departments from './dashboard/Departments';
import EmployeeManagement from './dashboard/EmployeeManagement';
import LeaveManagement from './dashboard/LeaveManagement';
import Salary from './dashboard/Salary';
import AdminAttendance from './dashboard/AdminAttendance';
import Settings from './dashboard/Settings';
import About from './dashboard/About';

const AdminDashboard = ({ user, setIsAuthenticated }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useAuth();

  // Ensure only admin users can access this dashboard
  useEffect(() => {
    if (user && user.role !== 'admin') {
      logout();
      setIsAuthenticated(false);
    }
  }, [user, logout, setIsAuthenticated]);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  // Admin-only tabs
  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'departments', name: 'Departments', icon: '🏢' },
    { id: 'employees', name: 'User Management', icon: '👥' },
    { id: 'admin-attendance', name: 'Daily Attendance', icon: '✅' },
    { id: 'leave', name: 'Leave Management', icon: '📅' },
    { id: 'salary', name: 'Salary Management', icon: '💰' },
    { id: 'about', name: 'About', icon: 'ℹ️' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview user={user} />;
      case 'departments':
        return <Departments />;
      case 'employees':
        return <EmployeeManagement />;
      case 'admin-attendance':
        return <AdminAttendance />;
      case 'leave':
        return <LeaveManagement />;
      case 'salary':
        return <Salary />;
      case 'about':
        return <About />;
      case 'settings':
        return <Settings onLogout={handleLogout} />;
      default:
        return <Overview user={user} />;
    }
  };

  // If user is not admin, show access denied
  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have permission to access the admin dashboard.</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Go Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                type="button"
                aria-label="Open sidebar"
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden mr-3 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                👑 Admin Dashboard - Attendance Tracking System
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveTab('about')}
                className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-md transition-colors"
              >
                ℹ️ About
              </button>
              <span className="text-sm text-gray-700">
                Welcome, {user?.name}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                👑 Admin
              </span>
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Sidebar */}
        <div
          className={
            `fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-sm transition-transform duration-200 ease-in-out
            md:static md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
          }
        >
          <nav className="mt-8">
            <div className="px-4 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-100 text-purple-700 border-r-2 border-purple-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3 text-lg">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
