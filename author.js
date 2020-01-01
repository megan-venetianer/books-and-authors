var Book = require('./book.js');

class Author {
  constructor(bookAuthor) {
    this.first = bookAuthor.first;
    this.last = bookAuthor.last;
    this.books = [];
  }
  write(title, date) {
    var newBook = new Book(this.first, this.last, title, date);
    this.books.push(newBook);
  }
};


module.exports = Author;
