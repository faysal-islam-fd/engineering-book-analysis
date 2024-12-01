import { useState, useEffect } from 'react';
import axios from 'axios';
import { Book } from '../types';
import { toast } from 'react-hot-toast';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/books');
      setBooks(response.data);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch books';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return { books, loading, error, refetch: fetchBooks };
};