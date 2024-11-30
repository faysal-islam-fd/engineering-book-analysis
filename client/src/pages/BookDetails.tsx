// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Book } from '../types';
import { ExternalLink } from 'lucide-react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
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
  // console.log(id);
  
  const book = books.find((bk) => Number(bk.id) == Number(id))

  // const [book, setBook] = useState<Book | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchBook = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3000/api/books/${id}`);
  //       setBook(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching book:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchBook();
  // }, [id]);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-64">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  //     </div>
  //   );
  // }

  // if (!book) {
  //   return (
  //     <div className="text-center text-gray-600">Book not found</div>
  //   );
  // }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-96 w-full object-cover md:w-96"
            src={book.coverImage}
            alt={book.title}
          />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Details</h2>
            <ul className="text-gray-600">
              <li>ISBN: {book.isbn}</li>
              <li>Publisher: {book.publisher}</li>
              <li>Published: {new Date(book.publishDate).toLocaleDateString()}</li>
              <li>Pages: {book.pages}</li>
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${book.price.toFixed(2)}
            </span>
            <a
              href={book.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Buy on Amazon
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;