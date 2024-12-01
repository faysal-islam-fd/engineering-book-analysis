
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Book } from '../types';
import { toast } from 'react-hot-toast';

export const useBookForm = (id?: string) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<Partial<Book>>({
    title: '',
    author: '',
    description: '',
    isbn: '',
    publisher: '',
    publishDate: new Date().toISOString().split('T')[0],
    pages: 0,
    price: 0,
    coverImage: '',
    amazonLink: '',
  
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'number' ? parseFloat(value) : value;
    setBook(prev => ({
      ...prev,
      [name]: finalValue
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setBook(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return {
    book,
    setBook,
    loading,
    handleSubmit,
    handleChange,
    handleCheckboxChange
  };
};

export default useBookForm;