export class Book {
  public id: number;
  public description: String;
  constructor(id?: number, description?: String) {
    this.id = id || 0;
    this.description = description || '';
  }
}
