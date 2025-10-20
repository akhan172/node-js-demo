const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js CI/CD Demo!');
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
