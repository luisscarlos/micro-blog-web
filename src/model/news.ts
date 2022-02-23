export class News {

  id: string;
  title: string;
  date: Date;
  content: string;
  author: string;
  tags: string;
  // comment: Comment[];

  constructor(
    id: string,
    title: string,
    date: Date,
    content: string,
    author: string,
    tags: string,
    // comment: Comment[]
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.content = content;
    this.author = author;
    this.tags = tags;
    // this.comment = comment;
  }
}
