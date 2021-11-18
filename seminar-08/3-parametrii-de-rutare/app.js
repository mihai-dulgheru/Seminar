const express = require("express");
const app = express();
const port = 3000;
const Book = require("./Book");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bookRouter = express.Router();
app.use("/api", bookRouter);

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.listen(port, () => {
    console.log("Running on port " + port);
});

let books = [
    new Book(1, "Dune", "sf", "Frank Herbert"),
    new Book(2, "Robinson Crusoe", "adventures", "Daniel Defoe"),
    new Book(3, "Foundation", "sf", "Asimov"),
];

bookRouter
    .route("/books")
    .get((req, res) => {
        let filteredBooks = [];
        if (req.query.genre) {
            filteredBooks = books.filter((e) => e.genre === req.query.genre);
        } else {
            filteredBooks = books;
        }
        res.json(filteredBooks);
    })
    .post((req, res) => {
        let newBook = new Book(
            req.body.id,
            req.body.name,
            req.body.genre,
            req.body.author
        );
        books.push(newBook);
        console.log(books);
        return res.json(newBook);
    });

bookRouter.route("/books/:bookId").put((req, res) => {
    let bookModif = books.find((e) => e.id === parseInt(req.params.bookId));
    bookModif.name = req.body.name;
    bookModif.genre = req.body.genre;
    bookModif.author = req.body.author;
    return res.json(bookModif);
});

// bookRouter.route("/books/:bookId").delete((req, res) => {
//     let id = parseInt(req.params.bookId);
//     let book = books.find((e) => e.id === id);
//     if (book) {
//         books.splice(books.indexOf(book), 1);
//         res.status(200).json(book);
//     } else {
//         res.status(400).json({ message: "Bad Request" });
//     }
// });

bookRouter.route("/books/:bookId").delete((req, res) => {
    const filteredArr = books.filter((x) => x.id != req.params.bookId);
    res.send("Book with id " + req.params.bookId + " has been removed");
    console.log(filteredArr);
});
