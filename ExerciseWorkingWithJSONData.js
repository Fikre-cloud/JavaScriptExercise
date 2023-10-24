//what? Manipulate JSON data
//How? using array of json

const books = 
`[
    {
        "title": "The Lord of the Ring",
        "author": "John Ronald",
        "publishedYear": 1925,
        "price": 59.99
    },
    {
        "title": "Beloved",
        "author": "Toni Morrison",
        "publishedYear": 1978,
        "price": 39.99
    },
    {
        "title": "Nineteen Eighty-Four",
        "author": "George Orwell",
        "publishedYear": 1949,
        "price":35
    },
    {
        "title": "Invisible Man",
        "author": "Ralph Ellison",
        "publishedYear": 1952,
        "price":60.99
    }

]`
const parsedBooks = JSON.parse(books);

// calculate and log the total price of all books
const priceSum = parsedBooks.reduce((sum, books) => sum + books.price,0);
console.log('price sum', priceSum); 

//filter the books published before the year 1960 and create a new array with these books
const booksPublishedBefore1960 = parsedBooks.filter(book=>book.publishedYear<1960);
console.log("Books published before1960:", booksPublishedBefore1960);

//sort by default using letter

const sortedBooks = parsedBooks.sort((a,b)=>a.publishedYear-b.publishedYear);
console.log('sorted books',sortedBooks);