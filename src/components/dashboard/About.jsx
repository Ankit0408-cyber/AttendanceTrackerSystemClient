import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ATS</h1>
          <p className="text-xl text-gray-600">
            Attendance Tracking System - A comprehensive employee management solution
          </p>
        </div>

        <div className="space-y-8">
          {/* Website Overview */}
          <section className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">🏢</span>
              About This Website
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The Attendance Tracking System (ATS) is a modern, full-stack web application designed to streamline 
                employee management and attendance tracking for organizations of all sizes. This system provides 
                comprehensive tools for both administrators and employees to manage attendance, leave requests, 
                salary information, and departmental organization.
              </p>
              <p>
                Built with modern web technologies, ATS offers a responsive, user-friendly interface that works 
                seamlessly across desktop and mobile devices. The system ensures data security and provides 
                real-time updates for all attendance-related activities.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-green-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-900 mb-4 flex items-center">
              <span className="mr-2">✨</span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">📊</span>
                  <span className="text-gray-700">Real-time attendance tracking</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">📅</span>
                  <span className="text-gray-700">Leave request management</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">💰</span>
                  <span className="text-gray-700">Salary calculation and management</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">👥</span>
                  <span className="text-gray-700">Employee and department management</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">🔐</span>
                  <span className="text-gray-700">Secure authentication system</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">📱</span>
                  <span className="text-gray-700">Responsive design for all devices</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">📈</span>
                  <span className="text-gray-700">Analytics and reporting dashboard</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">⚙️</span>
                  <span className="text-gray-700">Customizable settings and preferences</span>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="bg-purple-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center">
              <span className="mr-2">💻</span>
              Technology Stack
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Frontend Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Frontend Technologies</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">⚛️</span>
                      <span className="font-medium">React</span>
                    </div>
                    <span className="text-sm text-gray-500">v18.2.0</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">⚡</span>
                      <span className="font-medium">Vite</span>
                    </div>
                    <span className="text-sm text-gray-500">v4.1.0</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🎨</span>
                      <span className="font-medium">Tailwind CSS</span>
                    </div>
                    <span className="text-sm text-gray-500">v3.2.7</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📊</span>
                      <span className="font-medium">Chart.js</span>
                    </div>
                    <span className="text-sm text-gray-500">v4.5.0</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🌐</span>
                      <span className="font-medium">Axios</span>
                    </div>
                    <span className="text-sm text-gray-500">v1.3.4</span>
                  </div>
                </div>
              </div>

              {/* Backend Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Backend Technologies</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🚀</span>
                      <span className="font-medium">Node.js</span>
                    </div>
                    <span className="text-sm text-gray-500">Runtime</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🌐</span>
                      <span className="font-medium">Express.js</span>
                    </div>
                    <span className="text-sm text-gray-500">v4.21.2</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🍃</span>
                      <span className="font-medium">MongoDB</span>
                    </div>
                    <span className="text-sm text-gray-500">Database</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🔗</span>
                      <span className="font-medium">Mongoose</span>
                    </div>
                    <span className="text-sm text-gray-500">v8.17.2</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🔐</span>
                      <span className="font-medium">JWT</span>
                    </div>
                    <span className="text-sm text-gray-500">Authentication</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Development Tools */}
          <section className="bg-orange-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-900 mb-4 flex items-center">
              <span className="mr-2">🛠️</span>
              Development Tools & Libraries
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Frontend Tools</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• ESLint (Code linting)</li>
                  <li>• PostCSS (CSS processing)</li>
                  <li>• Autoprefixer (CSS compatibility)</li>
                  <li>• React Router DOM (Routing)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Backend Tools</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Nodemon (Development server)</li>
                  <li>• Morgan (HTTP logging)</li>
                  <li>• CORS (Cross-origin requests)</li>
                  <li>• bcryptjs (Password hashing)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Utilities</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Zod (Schema validation)</li>
                  <li>• Cookie Parser (Cookie handling)</li>
                  <li>• dotenv (Environment variables)</li>
                  <li>• path-to-regexp (URL matching)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🏗️</span>
              System Architecture
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The ATS follows a modern full-stack architecture with clear separation of concerns:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Frontend:</strong> React-based single-page application with component-based architecture</li>
                <li><strong>Backend:</strong> RESTful API built with Express.js and Node.js</li>
                <li><strong>Database:</strong> MongoDB for flexible document-based data storage</li>
                <li><strong>Authentication:</strong> JWT-based stateless authentication system</li>
                <li><strong>State Management:</strong> React Context API for global state management</li>
                <li><strong>Styling:</strong> Tailwind CSS for utility-first responsive design</li>
              </ul>
            </div>
          </section>

          {/* Contact/Support */}
          <section className="bg-indigo-50 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center justify-center">
              <span className="mr-2">📞</span>
              Support & Contact
            </h2>
            <p className="text-gray-700 mb-4">
              For technical support, feature requests, or general inquiries about the ATS system, 
              please contact your system administrator or IT department.
            </p>
            <div className="text-sm text-gray-600">
              <p>Version: 1.0.0 | Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
