export default class booksService {
  static getBooks() {
    let res = fetch("https://jsonplaceholder.typicode.com/users");

    let data = res.json;

    return data;
  }
}
