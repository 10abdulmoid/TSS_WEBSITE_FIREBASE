import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Briefcase, Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      title: 'Upcoming Events',
      description: 'View and register for upcoming events',
      icon: Calendar,
      link: '/events',
      color: 'bg-blue-500'
    },
    {
      title: 'Job Opportunities',
      description: 'Browse latest job openings',
      icon: Briefcase,
      link: '/jobs',
      color: 'bg-green-500'
    },
    {
      title: 'Resources',
      description: 'Access learning materials and guides',
      icon: BookOpen,
      link: '/resources',
      color: 'bg-purple-500'
    },
    {
      title: 'Career Guidance',
      description: 'Get personalized career advice',
      icon: TrendingUp,
      link: '/services/career-guidance',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { label: 'Events Attended', value: '12', icon: Calendar },
    { label: 'Applications Sent', value: '8', icon: Briefcase },
    { label: 'Network Connections', value: '45', icon: Users },
    { label: 'Certifications', value: '3', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.displayName || 'Student'}! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Here's what's happening in your student journey today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
                <stat.icon className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="group bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-all duration-200 hover:border-primary-200"
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg p-6 shadow-sm border"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 py-3 border-b border-gray-100 last:border-b-0">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">Registered for "React Workshop"</p>
                <p className="text-gray-500 text-sm">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b border-gray-100 last:border-b-0">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">Applied to Frontend Developer position</p>
                <p className="text-gray-500 text-sm">5 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b border-gray-100 last:border-b-0">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">Completed "Resume Building Guide"</p>
                <p className="text-gray-500 text-sm">1 week ago</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
