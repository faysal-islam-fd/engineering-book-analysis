import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BookFormHeaderProps {
  isEditing: boolean;
  onBack: () => void;
}

const BookFormHeader: React.FC<BookFormHeaderProps> = ({ isEditing, onBack }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <button
        onClick={onBack}
        className="text-gray-300 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      <h1 className="text-2xl font-bold text-white">
        {isEditing ? 'Edit Book' : 'Add New Book'}
      </h1>
    </div>
  );
};

export default BookFormHeader;