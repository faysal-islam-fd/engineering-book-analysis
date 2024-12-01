

import React from 'react';
import { Book } from '../../types';

interface BookFormFieldsProps {
  book: Partial<Book>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categories: { _id: string; name: string }[];
}

const BookFormFields: React.FC<BookFormFieldsProps> = ({
  book,
  handleChange,
  handleCheckboxChange,
  categories,
}) => {
  return (
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

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Category
        </label>
        <select
          name="category"
        //   value={book.category}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          required
        >
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
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
          Publish Date
        </label>
        <input
          type="date"
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
          min="1"
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
          min="0"
          step="0.01"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Cover Image URL
        </label>
        <input
          type="url"
          name="coverImage"
          value={book.coverImage}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Amazon Link
        </label>
        <input
          type="url"
          name="amazonLink"
          value={book.amazonLink}
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

      <div className="flex space-x-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="inStock"
            // checked={book.inStock}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
          />
          <span className="text-gray-300">In Stock</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="featured"
            // checked={book.featured}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
          />
          <span className="text-gray-300">Featured</span>
        </label>
      </div>
    </div>
  );
};

export default BookFormFields;