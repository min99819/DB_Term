const express = require(`express`);
const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
  res.send(`Helzzlozzdd`);
});

app.get(`/login`, (req, res) => {
  res.sendFile(__dirname + `/templates/login.html`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
