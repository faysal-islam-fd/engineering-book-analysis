export interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  isbn: string;
  publisher: string;
  publishDate: string;
  pages: number;
  price: number;
  coverImage: string;
  amazonLink: string;
}
export interface Category {
  _id: string;
  name: string;
  description: string;
}


export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}