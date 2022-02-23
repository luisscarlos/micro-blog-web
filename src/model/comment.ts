export class Comment {

  id: string;
  content: string;
  date: Date;
  author: string;

  constructor(
    id: string,
    content: string,
    date: Date,
    author: string,
  ) {
    this.id = id;
    this.content = content;
    this.date = date;
    this.author = author;
  }
}
