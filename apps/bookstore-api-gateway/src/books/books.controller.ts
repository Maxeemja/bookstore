import { Controller, Get, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern('findOneBook')
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern('updateBook')
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern('removeBook')
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
