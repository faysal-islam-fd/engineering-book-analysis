
import { Book } from '@/types';
import axios from '../config/axios';
import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
 
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/books/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book:', error);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center text-gray-600">Book not found</div>
    );
  }

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