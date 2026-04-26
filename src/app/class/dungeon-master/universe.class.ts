import { Book } from "./book.class";

export class Universe {
  public id: number;
  public name: String;
  public description: String;
  public active: boolean;
  public book: Book;
  public dateCreation: Date;
}
