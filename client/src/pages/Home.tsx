import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Book } from '../types';

const Home = () => {
  const books = [
    {
      id:1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A story of decadence and excess, Gatsby explores the darker aspects of the American Dream.",
      isbn: "978-0743273565",
      publisher: "Scribner",
      publishDate: "1925-04-10",
      pages: 180,
      price: 15.99,
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      amazonLink: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567"
    },
    {id:2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
      isbn: "978-0446310789",
      publisher: "Grand Central Publishing",
      publishDate: "1960-07-11",
      pages: 281,
      price: 14.99,
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      amazonLink: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0446310786"
    },
    { id:3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A story of decadence and excess, Gatsby explores the darker aspects of the American Dream.",
      isbn: "978-0743273565",
      publisher: "Scribner",
      publishDate: "1925-04-10",
      pages: 180,
      price: 15.99,
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      amazonLink: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567"
    },
    { id:4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A story of decadence and excess, Gatsby explores the darker aspects of the American Dream.",
      isbn: "978-0743273565",
      publisher: "Scribner",
      publishDate: "1925-04-10",
      pages: 180,
      price: 15.99,
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      amazonLink: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567"
    },
    { id:5,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A story of decadence and excess, Gatsby explores the darker aspects of the American Dream.",
      isbn: "978-0743273565",
      publisher: "Scribner",
      publishDate: "1925-04-10",
      pages: 180,
      price: 15.99,
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      amazonLink: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567"
    },
    { id:6,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A story of decadence and excess, Gatsby explores the darker aspects of the American Dream.",
      isbn: "978-0743273565",
      publisher: "Scribner",
      publishDate: "1925-04-10",
      pages: 180,
      price: 15.99,
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      amazonLink: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567"
    },
  ];
  // const [books, setBooks] = useState<Book[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/books');
  //       setBooks(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching books:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchBooks();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-64">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <Link
          key={book.id}
          to={`/book/${book.id}`}
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
  );
};

export default Home;