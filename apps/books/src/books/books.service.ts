import { Injectable } from '@nestjs/common';
import { BookDto } from 'y/contracts/books/book.dto';
import { CreateBookDto } from 'y/contracts/books/create-book.dto';
import { UpdateBookDto } from 'y/contracts/books/update-book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'Book1',
      author: 'me',
      rating: 3,
    },
    {
      id: 2,
      title: 'Book2',
      author: 'VanBoba',
      rating: 5,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      id: this.books.length + 1,
      ...createBookDto,
    };

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
