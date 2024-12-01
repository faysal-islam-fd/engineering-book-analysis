import { Book } from '@/types';
import axios from '../config/axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
        <div className="min-h-screen flex flex-col flex-grow container mx-auto px-4 py-8">
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {books.map((book) => (
        <Link
          key={book._id}
          to={`/book/${book._id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-2">{book.author}</p>
            <p className="text-blue-600 font-bold">${book.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>

  );
};

export default Home;