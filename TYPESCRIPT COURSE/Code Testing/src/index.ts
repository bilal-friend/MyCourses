/// The last week :

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  price: number;
  style: string;
}

class Collection<T> {
  public data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habit", isbn: 259785 });
itemOne.add({ itemType: "Book", title: "The Power of Habit", isbn: 256845 });
console.log(itemOne.data);

let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "game", title: "Fifa 24", style: "sport", price: 20 });
itemTwo.add({
  itemType: "game",
  title: "Ucharted 4",
  style: "Action",
  price: 50,
});
console.log(itemTwo.data);
