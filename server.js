const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API route
app.get("/api/destinations", (req, res) => {
  const destinations = [
    { name: "Paris", country: "France", attraction: "Eiffel Tower", details: "City of Lights", img: "https://picsum.photos/id/1018/400/250" },
    { name: "Tokyo", country: "Japan", attraction: "Shibuya Crossing", details: "Blend of modern & traditional", img: "https://picsum.photos/id/1040/400/250" }
  ];
  res.json(destinations);
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
