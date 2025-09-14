import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, Settings, Award } from 'lucide-react';
import Logo from '../shared/Logo';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const profileCardRef = useRef<HTMLDivElement>(null);

  // Debug: Log user data
  useEffect(() => {
    if (user) {
      console.log("User data:", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid
      });
    }
  }, [user]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Navigation items for non-authenticated users (public pages)
  const publicNavItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  // Navigation items for authenticated users (protected pages)
  const authenticatedNavItems = [
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Jobs', path: '/jobs' },
    { title: 'Resources', path: '/resources' },
    { title: 'Events', path: '/events' },
    { title: 'N8N Event', path: 'https://attendee-viz.lovable.app', external: true },
  ];

  const activeClass = 'text-orange-600 font-semibold';
  const normalClass = 'text-gray-700 hover:text-orange-600 transition-colors duration-300';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Show different navigation items based on authentication */}
          {user ? (
            // Authenticated user navigation
            authenticatedNavItems.map((item) => 
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={normalClass}
                >
                  {item.title}
                </a>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => (isActive ? activeClass : normalClass)}
                >
                  {item.title}
                </NavLink>
              )
            )
          ) : (
            // Public navigation for non-authenticated users
            publicNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? activeClass : normalClass)}
                end={item.path === '/'}
              >
                {item.title}
              </NavLink>
            ))
          )}

          {/* Auth Section */}
          {user ? (
            <div className="relative">
              {/* Profile Avatar - Clickable */}
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                onMouseEnter={() => setShowProfileCard(true)}
                onMouseLeave={() => setShowProfileCard(false)}
              >
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-orange-300 shadow-md hover:border-orange-400 transition-colors"
                    onError={(e) => {
                      console.log("Image failed to load:", user.photoURL);
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer ${user.photoURL ? 'hidden' : ''}`}>
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                </div>
              </div>

              {/* Profile Card Dropdown */}
              {showProfileCard && (
                <div 
                  ref={profileCardRef}
                  className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 transform transition-all duration-200 ease-out"
                  onMouseEnter={() => setShowProfileCard(true)}
                  onMouseLeave={() => setShowProfileCard(false)}
                >
                  {/* Profile Header */}
                  <div className="relative bg-gradient-to-br from-orange-400 to-red-500 rounded-t-2xl p-6 text-white">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-black/10 rounded-t-2xl"></div>
                    
                    {/* Profile Info */}
                    <div className="relative flex flex-col items-center text-center">
                      {user.photoURL ? (
                        <img 
                          src={user.photoURL} 
                          alt="Profile" 
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-2xl border-4 border-white shadow-lg ${user.photoURL ? 'hidden' : ''}`}>
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                      </div>
                      
                      <h3 className="mt-4 text-xl font-bold">
                        {user.displayName || user.email?.split('@')[0] || 'Student'}
                      </h3>
                      <p className="text-orange-100 text-sm font-medium">STUDENT</p>
                      <p className="text-orange-100 text-xs mt-1 opacity-90">
                        The Student Spot Community
                      </p>
                    </div>
                  </div>

                  {/* Profile Stats */}
                  <div className="px-6 py-4 border-b border-gray-100">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-orange-600">12</div>
                        <div className="text-xs text-gray-500">Events</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">8</div>
                        <div className="text-xs text-gray-500">Applications</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">45</div>
                        <div className="text-xs text-gray-500">Connections</div>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-3 px-6 py-3 hover:bg-orange-50 transition-colors group"
                    >
                      <User className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                      <span className="text-gray-700 group-hover:text-orange-700 font-medium">Dashboard</span>
                    </Link>
                    
                    <button className="w-full flex items-center space-x-3 px-6 py-3 hover:bg-orange-50 transition-colors group">
                      <Settings className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                      <span className="text-gray-700 group-hover:text-orange-700 font-medium">Settings</span>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 px-6 py-3 hover:bg-orange-50 transition-colors group">
                      <Award className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                      <span className="text-gray-700 group-hover:text-orange-700 font-medium">Achievements</span>
                    </button>
                  </div>

                  {/* Logout Button */}
                  <div className="border-t border-gray-100 p-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Sign out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm shadow hover:opacity-90 transition"
            >
              Continue with Google
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col justify-center items-center h-full space-y-6 px-4">
            {/* Show different navigation items based on authentication */}
            {user ? (
              // Authenticated user navigation
              authenticatedNavItems.map((item) => 
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xl ${normalClass}`}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </a>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `text-xl ${isActive ? activeClass : normalClass}`}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </NavLink>
                )
              )
            ) : (
              // Public navigation for non-authenticated users
              publicNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `text-xl ${isActive ? activeClass : normalClass}`}
                  onClick={closeMenu}
                  end={item.path === '/'}
                >
                  {item.title}
                </NavLink>
              ))
            )}

            {/* Auth Section for Mobile */}
            {user ? (
              <div className="flex flex-col items-center space-y-4 mt-6 pt-6 border-t border-orange-100">
                {/* User Info Card */}
                <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-4 w-full max-w-sm text-white text-center">
                  <div className="flex flex-col items-center space-y-2">
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt="Profile" 
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg ${user.photoURL ? 'hidden' : ''}`}>
                      {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="font-bold text-lg">
                      {user.displayName || user.email?.split('@')[0] || 'Student'}
                    </h3>
                    <p className="text-orange-100 text-sm">STUDENT</p>
                  </div>
                </div>
                
                {/* Logout Button */}
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="flex items-center space-x-2 bg-red-50 text-red-600 px-6 py-3 rounded-full hover:bg-red-100 transition-colors"
                >
                  <LogOut size={20} />
                  <span className="font-medium">Sign out</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full text-lg shadow hover:opacity-90 transition"
              >
                Continue with Google
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
