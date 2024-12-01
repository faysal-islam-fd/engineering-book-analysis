

import { Link } from 'react-router-dom';
import { BookOpen, LogIn, UserPlus, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

const Navbar = () => {
  const { isAuthenticated, logout,user ,isUserLoading} = useAuth();

  
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">BookStore</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                >
                  <UserPlus className="h-5 w-5" />
                  <span>Register</span>
                </Link>
              </>
            ) : (
              <div className='flex gap-2'>
                {
                  isUserLoading ?
                  <LoadingSpinner />
                  :
                  (user?.role === 'admin' ? <span>Hi, Admin</span> :  `Hi, ${user?.name}`)
                }
                <button
                onClick={logout}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;