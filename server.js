const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

const addTwoNumbers = (n1, n2) => {
  return n1 + n2;
};

app.get("/addTwoNumbers", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ statusCode: 400, message: "Invalid input" });
  }

  const result = addTwoNumbers(n1, n2);
  res.json({ statusCode: 200, data: result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
