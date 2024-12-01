

import React from 'react';
import { Save } from 'lucide-react';

interface BookFormSubmitProps {
  loading: boolean;
}

const BookFormSubmit: React.FC<BookFormSubmitProps> = ({ loading }) => {
  return (
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
  );
};

export default BookFormSubmit;