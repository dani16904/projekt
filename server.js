const express = require("express");
const app = express();

const port = 5000; // Change to a different port

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Locations</title>
        <link rel="stylesheet" href="style.css?v=2">
        <script src="script.js?v=2"></script>
        <style>
            body {
                font-family: "Segoe UI", Arial, sans-serif;
                margin: 0;
                padding: 0;
                background: #f4f6f8;
                color: #333;
            }

            header {
                background: linear-gradient(135deg, #2e7d32, #66bb6a);
                color: white;
                padding: 2rem;
                text-align: center;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
            }

            header h1 {
                margin: 0;
                font-size: 2.5rem;
            }

            header p {
                margin: 0.5rem 0 0;
                font-size: 1.2rem;
                opacity: 0.9;
            }

            .container {
                max-width: 1200px;
                margin: 2rem auto;
                padding: 1rem;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
            }

            .grid img {
                width: 100%;
                border-radius: 10px;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease;
            }

            .grid img:hover {
                transform: scale(1.05);
            }

            footer {
                text-align: center;
                padding: 1rem;
                background: #2e7d32;
                color: white;
                margin-top: 2rem;
            }

            .names {
                position: fixed;
                bottom: 10px;
                right: 15px;
                font-size: 0.9rem;
                color: #666;
                font-style: italic;
                background: rgba(255, 255, 255, 0.8);
                padding: 5px 10px;
                border-radius: 5px;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Discover Beautiful Locations</h1>
            <p>Explore some of the most stunning places in the region</p>
        </header>
        <div class="container">
            <div class="grid">
                <img src="images/schloss-gruyeres.jpg" alt="Schloss Gruyères">
                <img src="images/altstadt-freiburg.jpg" alt="Altstadt Freiburg">
                <img src="images/schwarzsee.jpg" alt="Schwarzsee">
                <img src="images/zentrum-paul-klee.jpg" alt="Zentrum Paul Klee">
                <img src="images/schloss-thun.jpg" alt="Schloss Thun">
            </div>
        </div>
        <footer>
            <p>&copy; 2025 Discover Locations. All rights reserved.</p>
        </footer>
        <div class="names">
            Daniel, Serge, Julian, Fabrice
        </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});