import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ProtectedRoute from './components/ProtectRoute';
import { AuthProvider } from './context/AuthContext';
import AdminLogin from './pages/admin/AdminLogin';

const Home = React.lazy(() => import('./pages/Home'));
const BookDetails = React.lazy(() => import('./pages/BookDetails'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const BookForm = React.lazy(() => import('./pages/admin/BookForm'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="">
      
          <main className="">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<><Navbar/> <Home /> <Footer /></>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/admin/login' element={<AdminLogin/>} />
                <Route path='/admin/books/new' element={<BookForm />} />
                <Route path='/admin/books/edit/:id' element={<BookForm />} />
                <Route
                  path="/book/:id"
                  element={
                    <ProtectedRoute>
                      <Navbar/>
                      <BookDetails />
                      <Footer />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute requireAdmin>
                     <Navbar/>
                      <AdminDashboard />
                      <Footer/>
                    
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/books/:id?"
                  element={
                    <ProtectedRoute requireAdmin>
                      <Navbar />
                      <BookForm />
                      <Footer/>
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </main>
       
        </div>
      </Router>
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'bg-gray-800 text-white',
          duration: 3000,
        }}
      />
    </AuthProvider>
  );
}

export default App;