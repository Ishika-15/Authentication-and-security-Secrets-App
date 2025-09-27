const express = require('express');
const bodyParser = require('body-parser');
const encrypt = require('mongoose-encryption');
const mongoose = require("mongoose");

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect("mongodb+srv://jainishikay_db_user:IDSG5p52Jbh5pLK7@secret.g98u1yl.mongodb.net/?retryWrites=true&w=majority&appName=Secret", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const trySchema = new mongoose.Schema({
    email: String,
    password: String
});

const secret = 'thisislittlesecret.';
trySchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

const Item = mongoose.model("Item", trySchema);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/submit', (req, res) => {
    res.render('submit');
});

app.post('/submit', (req, res) => {
    const userSecret = req.body.secret;
    console.log("Secret submitted:", userSecret);
    res.render("secrets");
});

app.post('/register', async (req, res) => {
    try {
        const newUser = new Item({
            email: req.body.username,
            password: req.body.password
        });
        await newUser.save();
        res.render("secrets");
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).send("An error occurred during registration.");
    }
});

app.post('/submit', (req, res) => {
    console.log("Submit POST route accessed");
    console.log("Secret received:", req.body.secret);
    res.render("secrets");
});

app.post("/login", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const foundUser = await Item.findOne({ email: username });
        if (foundUser && foundUser.password === password) {
            res.render("secrets");
        } else {
            res.status(401).send("Invalid username or password");
        }
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).send("An error occurred during login.");
    }
});

app.listen(5002, () => {
    console.log("Server started on port 5002");
});
