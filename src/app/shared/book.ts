export class Book {

  public rateUP(){
    this.rating++;
  }

   public rateDown(){
    this.rating--;
  }

  constructor(public title: string,
    public description: string,
    public rating: number = 0) { }
}
