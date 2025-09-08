import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import Logo from '../shared/Logo';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
            authenticatedNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? activeClass : normalClass)}
              >
                {item.title}
              </NavLink>
            ))
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
            <div className="flex items-center space-x-4">
              {/* User Info */}
              <div className="flex items-center space-x-2">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover border border-gray-200"
                    onError={(e) => {
                      console.log("Image failed to load:", user.photoURL);
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-semibold text-sm ${user.photoURL ? 'hidden' : ''}`}>
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm text-gray-700 max-w-24 truncate">
                  {user.displayName || user.email}
                </span>
              </div>
              
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                title="Sign out"
              >
                <LogOut size={18} />
                <span className="text-sm">Sign out</span>
              </button>
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
              authenticatedNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `text-xl ${isActive ? activeClass : normalClass}`}
                  onClick={closeMenu}
                >
                  {item.title}
                </NavLink>
              ))
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
              <div className="flex flex-col items-center space-y-4">
                {/* User Info */}
                <div className="flex items-center space-x-3">
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="Profile" 
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg ${user.photoURL ? 'hidden' : ''}`}>
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-lg text-gray-700">
                    {user.displayName || user.email}
                  </span>
                </div>
                
                {/* Logout Button */}
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors text-lg"
                >
                  <LogOut size={20} />
                  <span>Sign out</span>
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
