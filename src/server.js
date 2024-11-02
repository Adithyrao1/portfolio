const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON data in the request body
app.use(express.json());

app.post('/contact', (req, res) => {
  // Access the form data here
  const { firstName, lastName, email, phone, message } = req.body;

  // Log or process the data as needed
  console.log("Received contact form data:");
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Message:", message);

  // Send a success response
  res.json({ code: 200, message: "Message received successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
