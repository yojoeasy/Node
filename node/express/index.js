import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../views"));
// app.get("/", (req, res) => {
//     // res.render("home", { name: "Yogesh" });
//     // res.send("Hello World");
//     res.end("Hello World");
//     // res.json({
//     //     message: "Hello World",
//     //     success: true
//     // });
//     // res.send({ name: "Yogesh" });
//     // res.sendFile(path.join(__dirname, "../index.html"));
//     // res.download(path.join(__dirname, "../index.html"));
//     // res.redirect("https://google.com");
//     // res.status(200).json({
//     //     message: "Hello World",
//     //     success: true
//     // });

// });

app.route('/book')
    .get((req, res) => {
        res.send('Get a random book')
    })
    .post((req, res) => {
        res.send('Add a book')
    })
    .put((req, res) => {
        res.send('Update the book')
    })


app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler

})

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.get("/register", (req, res) => {
    res.send("Register Page");
});

app.get("/login", (req, res) => {
    res.send("Login Page");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
