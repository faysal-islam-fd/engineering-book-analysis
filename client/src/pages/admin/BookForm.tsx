import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Book } from '../../types';
import { Save, ArrowLeft } from 'lucide-react';
import { toast } from 'react-hot-toast';

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<Partial<Book>>({
    title: '',
    author: '',
    description: '',
    isbn: '',
    publisher: '',
    publishDate: '',
    pages: 0,
    price: 0,
    coverImage: '',
    amazonLink: '',
    
  });

  useEffect(() => {
    if (id) {
      fetchBook();
    }
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`/api/books/${id}`);
      setBook(response.data);
    } catch (error) {
      toast.error('Failed to fetch book details');
      navigate('/admin/dashboard');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await axios.put(`/api/books/${id}`, book);
        toast.success('Book updated successfully');
      } else {
        await axios.post('/api/books', book);
        toast.success('Book created successfully');
      }
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error(id ? 'Failed to update book' : 'Failed to create book');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-gray-900 p-8 rounded-xl">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="text-gray-300 hover:text-white"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold text-white">
          {id ? 'Edit Book' : 'Add New Book'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={book.description}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              ISBN
            </label>
            <input
              type="text"
              name="isbn"
              value={book.isbn}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Publisher
            </label>
            <input
              type="text"
              name="publisher"
              value={book.publisher}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Publisher Date
            </label>
            <input
              type="text"
              name="publishDate"
              value={book.publishDate}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Pages
            </label>
            <input
            
              type="number"
              name="pages"
              value={book.pages}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={book.price}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Cover Image
            </label>
            <input
              type="text"
              name="coverImage"
              value={book.coverImage}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              amazon Link
            </label>
            <input
              type="text"
              name="amazonLink"
              value={book.amazonLink}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Add more form fields for other book properties */}

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Save className="h-5 w-5" />
              <span>{loading ? 'Saving...' : 'Save Book'}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookForm;