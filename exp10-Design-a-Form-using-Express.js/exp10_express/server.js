const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.send(`
        <!DOCTYPE html>

        <html>

        <head>

            <title>Express Form</title>

            <style>

                body {
                    font-family: Arial;
                    background: #f2f2f2;
                }

                .container {
                    width: 400px;
                    margin: 100px auto;
                    padding: 25px;
                    background: white;
                }

                input {
                    width: 100%;
                    padding: 10px;
                    margin: 10px 0;
                    box-sizing: border-box;
                }

                button {
                    padding: 10px;
                    width: 100%;
                }

            </style>

        </head>

        <body>

            <div class="container">

                <h1>Registration Form</h1>

                <form action="/submit" method="POST">

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        required
                    >

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        required
                    >

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                    >

                    <button type="submit">
                        Submit
                    </button>

                </form>

            </div>

        </body>

        </html>
    `);

});

app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    res.send(`
        <h1>Form Submitted Successfully</h1>

        <p>Name: ${name}</p>

        <p>Email: ${email}</p>
    `);

});

app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});