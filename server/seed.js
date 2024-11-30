import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './models/Book.js';

dotenv.config();

const sampleBooks = [
  {
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
  {
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
  }
];

//  export async function seedDatabase() {
//   try {

//     console.log('Connected to MongoDB');

//     await Book.deleteMany({});
//     console.log('Cleared existing books');

//     await Book.insertMany(sampleBooks);
//     console.log('Sample books inserted successfully');

//     mongoose.connection.close();
//   } catch (error) {
//     console.error('Error seeding database:', error);
//     process.exit(1);
//   }
// }

