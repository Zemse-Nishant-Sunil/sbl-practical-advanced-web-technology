const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write(`
        <!DOCTYPE html>
        <html>

        <head>
            <title>Node.js Web Page</title>

            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    background: #f2f2f2;
                }

                h1 {
                    background: black;
                    color: white;
                    padding: 20px;
                }

                p {
                    font-size: 20px;
                }
            </style>
        </head>

        <body>

            <h1>Welcome to Node.js</h1>

            <p>
                This web page is created using Node.js.
            </p>

            <button onclick="alert('Hello from Node.js')">
                Click Me
            </button>

        </body>

        </html>
    `);

    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});